import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';
import jscc from 'rollup-plugin-jscc';
import typescript from '@rollup/plugin-typescript';

const { vendors } = require('./build');

function generateConfig(environemnt) {
  return {
    external: vendors.common,
    input: 'src/main.ts',
    treeshake: {
      pureExternalModules: true,
    },
    output: [
      {
        file: `./dist/ima.${environemnt}.cjs.js`,
        format: 'cjs',
        exports: 'named',
      },
      {
        file: `./dist/ima.${environemnt}.esm.js`,
        format: 'esm',
        exports: 'named',
      },
    ],
    plugins: [
      typescript(),
      json({
        preferConst: true, // Default: false
        compact: true, // Default: false
        namedExports: true, // Default: true
      }),
      replace({
        "path.dirname(path.resolve('@ima/core'))":
          "path.dirname(require.resolve('@ima/core'))",
        delimiters: ['', ''],
      }),
      jscc({
        values: { _SERVER: environemnt === 'server' },
      }),
    ],
  };
}

const config = [generateConfig('server'), generateConfig('client')];

export default config;
