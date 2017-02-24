const { get: httpGet } = require('cf-util-http');
const saveFile = require('./saveFile');

function downloadFile(url, filename, callback) {
  return httpGet(url, null, (err, res) => {
    if (err) {
      callback(err);
    } else {
      saveFile(filename, res.text);
      callback(null, res);
    }
  });
}

module.exports = downloadFile;
