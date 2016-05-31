# cf-util-async

> CloudFlare Async Util

## Installation

```sh
$ npm install cf-util-async
```

## Usage

Running async functions in a series:

```js
const http = require('cf-util-http');
const {series} = require('cf-util-async');

series([
  cb => http.get('endpoint-1.json', null, cb),
  cb => http.get('endpoint-2.json', null, cb)
], (err, results) => {
  if (err) {
    console.log(err.body); // > { errors: [{ message: 'Error!' }] }
  } else {
    console.log(res.body); // > [{ result: { id: 1, ... } }, { result: { id: 2, ... } }]
  }
});
```

Running async functions in parallel:

```js
const http = require('cf-util-http');
const {parallel} = require('cf-util-async');

parallel([
  cb => http.get('endpoint-1.json', null, cb),
  cb => http.get('endpoint-2.json', null, cb)
], (err, results) => {
  if (err) {
    console.log(err.body); // > { errors: [{ message: 'Error!' }] }
  } else {
    console.log(res.body); // > [{ result: { id: 1, ... } }, { result: { id: 2, ... } }]
  }
});
```
