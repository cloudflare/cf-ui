const { post: httpPost } = require('cf-util-http');

function uploadFile(url, file, callback) {
  const formData = new FormData();
  formData.append('file', file);
  return httpPost(url, { body: formData }, callback);
}

module.exports = uploadFile;
