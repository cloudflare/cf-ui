# cf-util-http-file

> Cloudflare HTTP File Util

## Installation

```sh
$ npm install cf-util-http-file
```

## Usage

```js
upload('/api/upload-file', fileInput.files[0], res => {
  console.log('Success!');
}, err => {
  console.log('Failed!');
});
```

```js
download('/api/download-file', 'filename.txt', res => {
  console.log('Success!');
}, err => {
  console.log('Failed!');
});
```

> Note: This is only really meant for plain text files, it might work with other
> stuff but don't expect it to.
