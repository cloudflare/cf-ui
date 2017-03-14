# cf-util-logger

> Cloudflare Logger Util

## Installation

```sh
$ npm install cf-util-logger
```

## Usage

```js
import createLogger from 'cf-util-logger';
const warning = createLogger('application:warning');
const error = createLogger('application:error');

warning('Something is about to happen...');
error('OMG IT HAPPENED!!!');

// console:
// application:warning - Something is about to happen...
// application:error   - OMG IT HAPPENED!!!
```
