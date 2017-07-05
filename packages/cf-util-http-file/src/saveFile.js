export default function saveFile(filename, file, mimeType) {
  mimeType = mimeType || 'application/octet-stream';
  if ('msSaveBlob' in global.navigator) {
    global.navigator.msSaveBlob(new Blob([file]), filename);
    return;
  }

  const fileBlob = new Blob([file], { type: mimeType });
  const link = global.document.createElement('a');
  link.href = global.URL.createObjectURL(fileBlob);
  if (filename) link.download = filename;

  link.click();
}
