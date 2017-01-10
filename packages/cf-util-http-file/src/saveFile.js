// @flow

declare var global: {
  document: typeof document,
  encodeURI: typeof encodeURI,
  navigator: typeof navigator,
};

function saveFile(filename: string, file: string, mimeType?: string) {
  mimeType = mimeType || 'data:application/octet-stream';
  // Data URIs cannot be used for navigation, for scripting, or to
  // populate frame or iframe elements in IE. Instead for IE specifically,
  // use `msSaveBlob` to save the file.
  if (typeof global.navigator.msSaveBlob === 'function') {
    global.navigator.msSaveBlob(new Blob([file]), filename);
    return;
  }

  // Create a new anchor tag, set its href attribute to be a data url
  // comprised of the contents of the response (aka our file), then click
  // the link. This will prompt the browser to download the file.
  const link = global.document.createElement('a');
  link.href = mimeType + ',' + global.encodeURI(file);
  if (filename) link.download = filename;

  // Dispatch fake click event to download the file
  const event = global.document.createEvent('MouseEvents');
  event.initEvent('click', true, true);
  link.dispatchEvent(event);
}

module.exports = saveFile;
