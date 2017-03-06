import { upload, download } from '../../src/index';

const fileInput = global.document.getElementById('file');
const uploadButton = global.document.getElementById('upload');

const filenameInput = global.document.getElementById('filename');
const downloadButton = global.document.getElementById('download');

uploadButton.addEventListener('click', () => {
  const file = fileInput.files[0];

  if (!file) {
    return;
  }

  upload('/upload', fileInput.files[0], res => {
    const option = document.createElement('option');

    option.value = res.body.filename;
    option.textContent = res.body.originalname;

    filenameInput.appendChild(option);
  });
});

downloadButton.addEventListener('click', () => {
  const filename = filenameInput.value;
  const originalname = filenameInput.selectedOptions[0].textContent;

  download('/download/' + filename, originalname, () => {
    console.log('Success!');
  });
});
