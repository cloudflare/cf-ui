import webpack from 'webpack';
import path from 'path';
import fs from 'fs';

const isMin = process.env.NODE_ENV === 'production';
const entry = {};
fs.readdirSync(path.resolve(__dirname, './packages')).forEach(file => {
  if (file.indexOf('cf-') === 0) {
    entry[
      `packages/${file}/dist/${file}${isMin ? '.min' : ''}`
    ] = `./packages/${file}/src/`;
  }
});

const plugins = [
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify('production') }
  })
];

if (isMin) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

export default {
  entry,
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'cf-style-container': {
      root: 'cf-style-container',
      commonjs2: 'cf-style-container',
      commonjs: 'cf-style-container',
      amd: 'cf-style-container'
    }
  },
  module: {
    rules: [
      {
        loader: 'file-loader?limit=10000',
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
      }
    ]
  },
  output: {
    path: './',
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  plugins,
  resolve: {
    extensions: ['.js', '.json'],
    modules: ['node_modules']
  }
};
