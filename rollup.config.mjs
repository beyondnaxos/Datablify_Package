import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      postcss({
        modules: true,
        minimize: true,
      }),
      babel({
        exclude: 'node_modules/**',
        "presets": [
            ["@babel/preset-react", {
            "runtime": "automatic"
          }]
          ],
      }),
      external(),
      resolve(),
      json(),
      terser(),
    ],
  },
]
