import path from 'path';
import open from 'better-opn';
import pc from 'picocolors';
import nodemon from 'nodemon';
import prettyMs from 'pretty-ms';
import { CommandBuilder } from 'yargs';

import { DevArgs, HandlerFn } from '../types';
import {
  handlerFactory,
  IMA_CLI_RUN_SERVER_MESSAGE,
  info,
  error,
  resolveCliPluginArgs
} from '../lib/cli';
import { watchCompiler, handleError } from '../lib/compiler';
import { createWebpackConfig, resolveEnvironment } from '../webpack/utils';
import SharedArgs from '../lib/SharedArgs';

/**
 * Builds ima application with provided config in watch mode
 * while also starting the webserver itself.
 *
 * @param {DevArgs} args
 * @returns {Promise<void>}
 */
const dev: HandlerFn<DevArgs> = async args => {
  // Set force SPA flag so server can react accordingly
  if (args.forceSPA) {
    args.legacy = true; // SPA only supports es5 versions
    process.env.IMA_CLI_FORCE_SPA = 'true';
  }

  try {
    const startTime = Date.now();

    info('Parsing webpack configuration file...');
    const config = await createWebpackConfig(['client', 'server'], {
      ...args,
      isProduction: false,
      isWatch: true
    });

    info(
      `Starting webpack compiler${
        args.legacy
          ? pc.black(pc.bgCyan(' in legacy (es5 compatible) mode'))
          : ''
      }...`
    );

    const compiler = await watchCompiler(config, args);
    info(`Total compile time: ${pc.green(prettyMs(Date.now() - startTime))}`);

    if (args.forceSPA) {
      info(`Starting application in ${pc.black(pc.bgCyan('SPA mode'))}...`);
    }

    // Start ima server with nodemon
    nodemon({
      script: path.join(args.rootDir, 'server/server.js'),
      watch: [`${path.join(args.rootDir, 'server')}`],
      args: [`--verbose=${args.verbose}`],
      cwd: args.rootDir
    });

    // Trigger nodemon reload only when new assets are emitted
    compiler.hooks.done.tap('RebootImaServerPlugin', stats => {
      const emittedAssets = stats
        .toJson()
        .children?.find(({ name }) => name === 'server')
        ?.assets?.filter(
          ({ emitted, name }) => emitted && !name.includes('app.server.js')
        );

      if (emittedAssets?.length) {
        info('Rebooting server due to configuration changes...');
        nodemon.restart();
      }
    });

    // Open browser at localhost
    if (args.open) {
      nodemon.on('message', message => {
        if (message === IMA_CLI_RUN_SERVER_MESSAGE) {
          const imaEnvironment = resolveEnvironment(args.rootDir);
          const port = imaEnvironment?.$Server?.port ?? 3001;

          try {
            open(`http://localhost:${port}`);
          } catch (err) {
            error(
              `Could not open http://localhost:${port} inside a browser, ${err}`
            );
          }
        }
      });
    }
  } catch (err) {
    handleError(err);
  }
};

const CMD = 'dev';
export const command = `${CMD} [rootDir]`;
export const describe = 'Run application in development watch mode';
export const handler = handlerFactory(dev);
export const builder: CommandBuilder = {
  ...SharedArgs,
  open: {
    desc: 'Opens browser window after server has been started',
    type: 'boolean',
    default: true
  },
  legacy: {
    desc: 'Runs application in legacy (es5-compatible) mode',
    type: 'boolean',
    default: false
  },
  forceSPA: {
    desc: 'Forces application to run in SPA mode',
    type: 'boolean',
    default: false
  },
  ...resolveCliPluginArgs(CMD)
};
