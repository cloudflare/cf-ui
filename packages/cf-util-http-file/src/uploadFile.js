// @flow

import type { Callback, Abort } from 'cf-util-http';
const {post: httpPost} = require('cf-util-http');

function uploadFile(url: string, file: string, callback: Callback): Abort {
  const formData = new FormData();
  formData.append('file', file);
  return httpPost(url, { body: formData }, callback);
}

module.exports = uploadFile;
