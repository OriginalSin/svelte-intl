import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'index.js',
  output: {
    file: 'dist/svelte-intl.js',
    format: 'umd',
    name: 'svelte-intl'
  },
  plugins: [
    resolve(),
    commonjs()
  ]
};