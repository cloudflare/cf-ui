import express from 'express';
import webpack from 'webpack';
import webpackDev from 'webpack-dev-middleware';
import webpackHot from 'webpack-hot-middleware';
import configDev from './config.dev.babel';
import { HOT_RELOAD_PORT } from './constants';

const app = express();
const compiler = webpack(configDev);

app.use(
  webpackDev(compiler, {
    publicPath: configDev.output.publicPath
  })
);

app.use(webpackHot(compiler));

app.listen(HOT_RELOAD_PORT, () => {
  console.log('Dev server started at port %d', HOT_RELOAD_PORT);
});
