# cf-util-http

> CloudFlare HTTP Util

This utility library is a simple interface that hides away the client-side http
implementation being used so that it can easily be swapped out for something
else.

## Installation

```sh
$ npm install cf-util-http
```

## Usage

```js
import http from 'cf-util-http';

http.beforeSend(opts => {
  opts.url = '/api/v4' + opts.url;
});

http.post('/posts', {
  body: {
    title: 'A New Post',
    content: 'Contents of the new post.'
  }
}, function(res) {
  console.log(res); // > { result: { id: 1, title: 'A New Post', content: 'Contents of the new post.' } }
}, function(err) {
  console.log(res.body); // > { errors: [{ message: 'Error!' }] }
});
```

## API

### `http.request(method, url, [opts], [onSuccess], [onError])`

Perform an HTTP request.

```js
const abortRequest = http.request('POST', '/posts', {
  headers: {...},
  parameters: {...},
  body: {...}
}, onSuccess, onError);

abortRequest();
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `method` | `String` | **Required.** The HTTP method type for the request. |
| `url` | `String` | **Required.** The url to make the request. |
| `opts` | `Object` | **Optional.** Options for the request. |
| `opts.parameters` | `Object` | **Optional.** Parameters to be serialized into the url. |
| `opts.headers` | `Object` | **Optional.** Headers to send with the request. |
| `opts.body` | `Object` | **Optional.** The body of the request. |
| `onSuccess` | `Function` | **Optional.** Callback to call on success. |
| `onError` | `Function` | **Optional.** Callback to call on error. |

**Returns:**

`http.request` will return an abort function that you can call to stop the
request from being made.

**`onSuccess`/`onError`:**

These callbacks will receive a single argument `res` which will have the
following shape:

```js
{
  headers: {...},
  status: 200,
  body: {...}
  text: '...'
}
```

### `http.[get/post/put/patch/del]`

These are all shorthands to `http.request` that don't require passing a
`method`.

### `http.beforeSend(callback)`

Modify a request before it is sent. This can be useful for authentication or
other middleware.

`callback` will be called with a single argument `opts` that you can mutate
before a request will be created. `opts` will have the following shape:

```js
{
  method: 'POST',
  url: '/posts',

  // Headers to be sent along with the request
  headers: {
    Accept: 'application/json'
  },

  // Parameters to be serialized as `?page=1&limit=20` and appended to the url
  parameters: {
    page: 1,
    limit: 20
  },

  // Body of the request being sent
  body: {
    title: 'A New Post',
    content: 'Contents of the new post.'
  }
}
```

Note that `headers`, `parameters`, and `body` may not exist depending on the
request being made.
