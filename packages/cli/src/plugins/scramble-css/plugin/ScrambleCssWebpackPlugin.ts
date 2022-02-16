import path from 'path';

import postcss from 'postcss';
import { validate } from 'schema-utils';
import { Schema } from 'schema-utils/declarations/validate';
import { Compilation, Compiler, sources } from 'webpack';

import postCssScrambler from '../postCssScrambler';

import schema from './options.json';

const CSS_RE = /\.css$/;

export interface ScrambleCssWebpackPluginOptions {
  hashTableFilename: string;
  uniqueIdentifier: string;
  mainAssetFilter: (filename: string) => boolean;
}

class ScrambleCssWebpackPlugin {
  private _pluginName: string;
  private _options: ScrambleCssWebpackPluginOptions;

  constructor(options: Partial<ScrambleCssWebpackPluginOptions>) {
    this._pluginName = this.constructor.name;

    // Set defaults
    this._options = {
      hashTableFilename:
        options?.hashTableFilename ?? 'static/css/hashMap.json',
      uniqueIdentifier: options?.uniqueIdentifier ?? '',
      mainAssetFilter:
        options?.mainAssetFilter ??
        // Filter main app.css file
        (filename =>
          !!(
            filename?.endsWith('app.min.css') || filename?.endsWith('app.css')
          )),
    };

    // Validate options
    validate(schema as Schema, this._options, {
      name: this._pluginName,
      baseDataPath: 'options',
    });
  }

  /**
   * Add compilation hooks to the webpack compiler
   */
  apply(compiler: Compiler) {
    compiler.hooks.compilation.tap(this._pluginName, compilation => {
      compilation.hooks.processAssets.tapPromise(
        {
          name: this._pluginName,
          stage:
            compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE,
          additionalAssets: true,
        },
        (assets: Compilation['assets']) => this.optimize(assets, compilation)
      );

      compilation.hooks.statsPrinter.tap(this._pluginName, stats => {
        stats.hooks.print
          .for('asset.info.minimized')
          .tap(
            'scramble-css-webpack-plugin',
            (minimized, { green, formatFlag }) =>
              minimized && green && formatFlag
                ? green(formatFlag('minimized'))
                : ''
          );
      });
    });
  }

  /**
   * Optimize css assets using postCss plugin. By default first file that
   * is returned from mainAssetFilter is used as base to generate hashMap,
   * other files are scrambled using existing map.
   */
  async optimize(
    assets: Compilation['assets'],
    compilation: Compilation
  ): Promise<void> {
    const [mainCssAsset, restCssAssets] = this._filterAssets(
      Object.keys(assets)
    );

    // Skip if there is no main asset in the processed assets
    if (!mainCssAsset) {
      return;
    }

    // First process main and generate hash table
    this._process(assets, mainCssAsset, compilation).then(() => {
      if (Array.isArray(restCssAssets) && restCssAssets.length) {
        return Promise.all(
          restCssAssets.map(cssAsset =>
            this._process(assets, cssAsset, compilation, false)
          )
        );
      }
    });
  }

  private async _process(
    assets: Compilation['assets'],
    filename: string,
    compilation: Compilation,
    generateHashTable = true
  ): Promise<void> {
    // Resolve absolute path for hash table filename
    const hashTable = path.isAbsolute(this._options.hashTableFilename)
      ? this._options.hashTableFilename
      : path.join(
          compilation.outputOptions.path ?? process.cwd(),
          this._options.hashTableFilename
        );

    return postcss([
      postCssScrambler({
        generateHashTable,
        hashTable,
      }),
    ])
      .process(assets[filename].source(), {
        map: assets[filename].map(),
        from: filename,
        to: filename,
      })
      .then(({ css, map }) => {
        // Update processed assets
        compilation.updateAsset(
          filename,
          map
            ? new sources.SourceMapSource(css, filename, map)
            : new sources.RawSource(css)
        );
      });
  }

  private _filterAssets(assets: string[]): [string, string[]] {
    const cssAssets = assets.filter(asset => CSS_RE.test(asset));
    const [mainAsset] = cssAssets.splice(
      cssAssets.findIndex(asset => this._options.mainAssetFilter(asset)),
      1
    );

    return [mainAsset, cssAssets];
  }
}

export { ScrambleCssWebpackPlugin };
