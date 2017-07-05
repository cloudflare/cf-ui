export default function saveFile(filename, file, mimeType) {
  if (!filename || !file) throw new Error('filename and file are required');
  mimeType = mimeType || 'application/octet-stream';
  if ('msSaveBlob' in global.navigator) {
    global.navigator.msSaveBlob(new Blob([file]), filename);
    return;
  }

  const fileBlob = new Blob([file], { type: mimeType });
  const link = global.document.createElement('a');
  link.href = global.URL.createObjectURL(fileBlob);
  link.download = filename;

  link.click();
}
