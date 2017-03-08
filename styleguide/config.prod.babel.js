import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import chalk from 'chalk';
import { SRC_DIR, BUILD_DIR } from './constants';

export default {
  cache: false,
  entry: {
    app: [path.join(SRC_DIR, 'index.js')],
    static: [path.join(__dirname, 'build.js')]
  },
  module: {
    rules: [
      {
        loader: 'url-loader?limit=10000',
        test: /.(jpg|gif|png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=.&]+)?$/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['transform-object-rest-spread'],
          presets: [['es2015', { modules: false }], 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: 'css-loader'
        })
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    libraryTarget: 'umd'
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
      entry: 'static',
      paths: ['/index.html'],
      globals: {
        document: {}
      }
    }),
    new ProgressBarPlugin({
      format: `  build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
      clear: false
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new ExtractTextPlugin({
      filename: 'app-[hash].css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json'],
    modules: ['node_modules']
  }
};
