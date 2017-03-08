import webpack from 'webpack';
import path from 'path';
import ip from 'ip';
import { HOT_RELOAD_PORT, SRC_DIR, BUILD_DIR } from './constants';

export default {
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      `webpack-hot-middleware/client?path=http://${ip.address()}:${HOT_RELOAD_PORT}/__webpack_hmr`,
      path.join(SRC_DIR, 'index.js')
    ]
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
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: `http://${ip.address()}:${HOT_RELOAD_PORT}/build/`
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('development') }
    }),
    new webpack.HotModuleReplacementPlugin()
    //new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json'],
    modules: ['styleguide', 'node_modules']
  }
};
