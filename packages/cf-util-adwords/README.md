# cf-util-adwords

> Cloudflare Google AdWords Util

## Installation

```sh
$ npm install cf-util-adwords
```

## Usage

```js
import adwords from 'cf-util-adwords';

adwords.track(process.env.ADWORDS_CONVERSION_ID, {
  // parameters...
}).then(function() {
  // success loading script
}).catch(function() {
  // error loading script
});
```

If you want to override `google_remarketing_only` you can optionally pass a
third parameter:

```js
adwords.track(
  process.env.ADWORDS_CONVERSION_ID,
  {...},
  true // optional, defaults to `false`
);
```
