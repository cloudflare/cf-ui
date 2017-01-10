// @flow

import type {Result, Callback} from 'cf-util-http';

const {get: httpGet} = require('cf-util-http');
const saveFile = require('./saveFile');

function downloadFile(url: string, filename: string, callback: Callback) {
  return httpGet(url, null, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      res = ((res: any): Result);
      saveFile(filename, res.text);
      callback(null, res);
    }
  });
}

module.exports = downloadFile;
