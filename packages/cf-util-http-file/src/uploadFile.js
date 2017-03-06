import { post as httpPost } from 'cf-util-http';

export default function uploadFile(url, file, callback) {
  const formData = new FormData();
  formData.append('file', file);
  return httpPost(url, { body: formData }, callback);
}
