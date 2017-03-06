import { get as httpGet } from 'cf-util-http';
import saveFile from './saveFile';

export default function downloadFile(url, filename, callback) {
  return httpGet(url, null, (err, res) => {
    if (err) {
      callback(err);
    } else {
      saveFile(filename, res.text);
      callback(null, res);
    }
  });
}
