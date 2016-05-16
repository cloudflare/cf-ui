# cf-test-store

> CloudFlare Store Test Util

## Installation

```sh
$ npm install cf-test-store
```

## Usage

```js
const assert = require('assert');
const {createMockStore} = require('cf-test-store');

describe('exampleActions', () => {
  it('should do something', () => {
    var store = createMockStore();
    store.dispatch(exampleActions.doSomething());
    assert.deepEqual(store.getActions(), [{
      type: 'ACTION_ONE'
    }, {
      type: 'ACTION_TWO'
    }]);
  });
});
```
