# cf-util-text

> Cloudflare Text Util

## Installation

```sh
$ npm install cf-util-text
```

## Usage

```js
import {getText, setText} from 'cf-util-text';

getText('Some Text Value'); // >> Some Text Value
// console.error(Missing text value for: Some Text Value);

setText('Some Text Value', 'The Real Text Value');
getText('Some Text Value'); // >> The Real Text Value
```
