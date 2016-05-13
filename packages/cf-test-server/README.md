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
const exampleActions = require('../src/actions/example');

describe('exampleActions', () => {
  it('should do something', () => {
    const store = createMockStore();
    store.dispatch(exampleActions.doSomething());
    assert.deepEqual(store.getActions(), [{
      type: 'EXAMPLE_ACTION_ONE'
    }, {
      type: 'EXAMPLE_ACTION_TWO'
    }]);
  });
});
```
