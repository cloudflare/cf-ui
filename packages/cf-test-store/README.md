# cf-test-store

> Cloudflare Store Test Util

## Installation

```sh
$ npm install cf-test-store
```

## Usage

```js
import assert from 'assert';
import {createMockStore} from 'cf-test-store';

describe('exampleActions', () => {
  it('should do something', () => {
    const store = createMockStore();
    store.dispatch(exampleActions.doSomething());
    assert.deepEqual(store.getActions(), [{
      type: 'ACTION_ONE'
    }, {
      type: 'ACTION_TWO'
    }]);
  });
});
```
