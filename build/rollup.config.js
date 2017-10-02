const
  rollup = require('rollup'),
  babel = require('rollup-plugin-babel'),
  replace = require('rollup-plugin-replace'),
  uglify = require('rollup-plugin-uglify'),
  camelCase = require('camelcase'),
  fs = require('fs'),
  pkg = require('../package.json'),
  moduleName = camelCase(pkg.name),
  external = Object.keys(pkg.dependencies)
let cache

export default {
  entry: 'src/index.js',
  dest: 'dist/' + moduleName + '.js',
  cache: cache,
  format: 'umd',
  moduleName,
  external,
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
}