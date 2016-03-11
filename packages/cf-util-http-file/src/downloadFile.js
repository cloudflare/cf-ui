const {get: httpGet} = require('cf-util-http');
const saveFile = require('./saveFile');

function downloadFile(url, filename, onSuccess, onError) {
  return httpGet(url, null, res => {
    saveFile(filename, res.text);
    if (onSuccess) onSuccess(res);
  }, onError);
}

module.exports = downloadFile;
