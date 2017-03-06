# cf-test-server

> Cloudflare Server Test Util

## Installation

```sh
$ npm install cf-test-server
```

## Usage

```js
const assert = require('assert');
const {createFakeServer} = require('cf-test-server');
const http = require('cf-util-http');

describe('apiEndpoints', () => {
  it('should do something', done => {
    const server = createFakeServer();

    server.respondWith('GET', '/api/endpoint', 200, {
      'Content-Type': 'application/json'
    }, {
      value: 'foo'
    });

    http.get('/api/endpoint', null, (err, res) => {
      if (err) {
        done(err);
      } else {
        try {
          assert.equal(res.status, 200);
          assert.equal(res.headers['Content-Type'], 'application/json');
          assert.equal(res.body.value, 'foo');
          done();
        } catch (err) {
          done(err);
        }
      }
    });

    server.respond();
  });
});
```
