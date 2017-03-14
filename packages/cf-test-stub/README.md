# cf-test-stub

> Cloudflare Stub Test Util

This module allows you to create stubs that get automatically restored between
tests in Mocha.

## Installation

```sh
$ npm install --save-dev cf-test-stub
```

> Note: This module needs to be run within the context of Mocha

## Usage

```js
import assert from 'assert';
import {createStub, stubMethod} from 'cf-test-stub';

describe('exampleModule', () => {
  it('should do something', () => {
    const callback = createStub();
    exampleModule.doSomething(callback);
    assert.ok(callback.called);
    assert.equal(callback.callCount, 1);
  });

  it('should do something else', function() {
    const methodToStub = stubMethod(exampleModule, 'methodToStub', arg => {
      assert.equal(arg, 'value');
    });

    exampleModule.doSomethingElse();

    assert.ok(methodToStub.called);
    assert.equal(methodToStub.callCount, 1);

    // We can restore the original method ourselves, but cf-test-stub will
    // restore it automatically after the test.
    methodToStub.restore();
  });
});
```
