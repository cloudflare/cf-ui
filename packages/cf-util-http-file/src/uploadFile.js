const {post: httpPost} = require('./http');

function uploadFile(url, file, onSuccess, onError) {
  const formData = new FormData();
  formData.append('file', file);
  return httpPost(url, { body: formData }, onSuccess, onError);
}

module.exports = uploadFile;
