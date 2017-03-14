# cf-test-www-api

> Cloudflare WWW API Test Util

## Installation

```sh
$ npm install cf-test-www-api
```

## Usage

```js
import assert from 'assert';
import {createApiResponse} from 'cf-test-www-api';

describe('exampleModule', () => {
  it('should do something', () => {
    const apiResponse = createApiResponse({
      id: 1,
      value: 'david-is-dumb'
    });

    assert.deepEqual(apiResponse, {
      success: true,
      result: {
        id: 1,
        value: 'david-is-dumb'
      },
      result_info: null,
      errors: null,
      messages: []
    });
  });

  it('should do something with lists', () => {
    const apiResponse = createApiResponse([{
      id: 1,
      value: 'david-is-dumb'
    }, {
      id: 2,
      value: 'and-really-annoying'
    }]);

    assert.deepEqual(apiResponse, {
      success: true,
      result: [{
        id: 1,
        value: 'david-is-dumb'
      }, {
        id: 2,
        value: 'and-really-annoying'
      }],
      result_info: {
        page: 1,
        per_page: 20,
        count: 2,
        total_count: 2
      },
      errors: null,
      messages: []
    });
  });

  it('should error', () => {
    const apiResponse = createApiResponse(null, [
      { code: 1, message: 'This is an error' }
    ]);

    assert.deepEqual(apiResponse, {
      success: false,
      result: null,
      result_info: null,
      errors: [
        { code: 1, message: 'This is an error' }
      ],
      messages: []
    });
  });

  it('should have messages', () => {
    const apiResponse = createApiResponse(null, null, [
      'This is a message'
    ]);

    assert.deepEqual(apiResponse, {
      success: true,
      result: null,
      result_info: null,
      errors: null,
      messages: ['This is a message']
    });
  });
});
```
