/**
 * Rollup is only used for development. See the build:prod script in package.json
 * for the production build command.
 */
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import license from 'rollup-plugin-license';
import resolve from 'rollup-plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const banner = `/*!
 * <%= pkg.name %> <%= pkg.version %>
 *
 * Copyright 2022 Vincenzo Ingrao Jr.
 *
 * Licensed under the MIT License.
 */`;

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/micro-text.js',
    format: 'umd',
    name: 'micro.txt'
  },
  plugins: [
    babel({
      exclude: ['node_modules/**'],
      runtimeHelpers: true
    }),
    resolve({ preferBuiltins: false }),
    commonjs(),
    license({
      banner: banner
    }),
    typescript({
      tsconfig: 'tsconfig.rollup.json'
    })
  ]
};
