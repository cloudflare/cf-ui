# cf-util-http-poll

> Cloudflare HTTP Polling Util

## Installation

```sh
$ npm install cf-util-http-poll
```

## Usage

```js
import poll from 'cf-util-http-poll';

const cancelPolling = poll('/api/v4/dnssec/status', {
  interval: 2000,
  timeout: 60000,

  isComplete(res) {
    return !!res.body.active;
  },

  onComplete(res) {
    console.log('`isComplete` returned `true` for a response.');
  },

  onError(res) {
    console.log('An error was returned from the server.');
  },

  onCancel() {
    console.log('Polling was cancelled before `onComplete` was called.');
  }
});

cancelPolling();
```
