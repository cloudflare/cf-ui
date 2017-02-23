import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import chalk from 'chalk';
import { alias } from './alias';
import { SRC_DIR, BUILD_DIR } from './constants';

export default {
  cache: false,
  entry: {
    app: [path.join(SRC_DIR, 'index.js')],
    static: [path.join(__dirname, 'build.js')],
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        plugins: [
          'transform-object-rest-spread'
        ],
        presets: [
          ['es2015', { modules: false}],
          'react'
        ]
      },
    }],
  },
  output: {
    path: BUILD_DIR,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    libraryTarget: 'umd',
  },
  plugins: [
    new StaticSiteGeneratorPlugin('static', ['/index.html']),
    new ProgressBarPlugin({
      format: `  build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
      clear: false,
    }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    alias,
    extensions: ['.js', '.json'],
    modules: ['node_modules']
  },
};