# cf-test-focus

> Cloudflare Focus Test Util

## Installation

```sh
$ npm install cf-test-focus
```

## Usage

```js
import assert from 'assert';
import {trackFocus, getCurrentFocus} from 'cf-test-focus';

describe('exampleModule', () => {
  it('should do something with focus', () => {
    const stub = trackFocus();
    exampleModule.doSomething();
    assert.ok(stub.called);
    assert.equal(getCurrentFocus(), document.getElementById('#expected-focused-element'));
    // This will happen automatically in between tests.
    stub.restore();
  });
});
```
