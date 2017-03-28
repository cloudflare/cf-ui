import 'isomorphic-fetch';

import createLogger from 'cf-util-logger';

const logRequest = createLogger('http:request');
const logError = createLogger('http:error');
const logSuccess = createLogger('http:success');

// Store beforeSend callbacks.
let beforeSendCallbacks = [];

/**
 * Modify request options before they are sent.
 * Useful for authentication or other middleware.
 *
 * ```js
 * beforeSend(function(opts) {
 *   opts.url = '/api/v4' + opts.url;
 * });
 * ```
 *
 * @param {Function} callback
 */
export function beforeSend(callback) {
  beforeSendCallbacks.push(callback);
}

export function clearBeforeSend() {
  beforeSendCallbacks = [];
}

function toQueryParams(kvs) {
  const queryParams = [];
  // Clones the input
  if (Array.isArray(kvs) || kvs instanceof Map) {
    for (let [k, v] of kvs) {
      queryParams.push([k, v]);
    }
  } else {
    for (let k in kvs) {
      if (kvs.hasOwnProperty(k)) {
        queryParams.push([k, kvs[k]]);
      }
    }
  }
  return queryParams
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
}

function toHash(headers) {
  const hash = {};
  for (let [k, v] of headers) {
    hash[k] = v;
    hash[k.toLowerCase()] = v;
  }
  return hash;
}

function wrapResponse(headers, status, body, text, response) {
  return {
    headers,
    status,
    body: headers['content-type'] === 'application/json'
      ? JSON.parse(text)
      : text,
    text,
    response
  };
}

/**
 * Perform an http request. This method uses WHATWG's fetch API and returns a
 * promise that **resolves on any HTTP status**, and rejects on anything else,
 * such as a malformed URL or a network error.

 * If a callback is provided, and `response.ok` is true, the node-style callback
 * will be called with an undefined error and a hash that contains the headers
 * key-value pairs, status code, deserializes body (JSON or plain-text only for
 * now), the body text, and the original `Response` object. Otherwise the
 * callback is called with a single argument containing the above hash as the
 * error value.
 *
 * This function also returns a promise that contains the fetched response
 * object.
 *
 * ```js
 * request('POST', '/posts', {
 *   body: {
 *     title: 'A New Post',
 *     content: 'Contents of the new post.'
 *   }
 * }).then(function(res) {
 *   res.json().then(console.log); // > { result: { id: 1, title: 'A New Post', content: 'Contents of the new post.' } }
 * });
 * ```
 *
 * @param {String} method - GET/POST/PUT/PATCH/DELETE
 * @param {String} url
 * @param {Object} [opts] Any options fetch()'s second parameter accepts
 * @param {Object|Array<Array>|Map} [opts.parameters] Query parameters to add to `url`
 * @returns {Promise} Fetch promise
 *
 * @see [Global Fetch on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)
 * @see [WHATWG Fetch API Spec](https://fetch.spec.whatwg.org/)
 */
export function request(method, url, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  } else if (opts == null) {
    opts = {};
  }

  opts.method = method.toUpperCase();
  opts.url = url;
  opts.callback = callback;

  // Allow beforeSend to modify request options.
  beforeSendCallbacks.forEach(cb => cb(opts));

  method = opts.method;
  url = opts.url;
  callback = opts.callback;

  if (opts.parameters) {
    if (url.indexOf('?') === -1) {
      url = `${url}?${toQueryParams(opts.parameters)}`;
    }
  }

  let logMessage = `${method} ${url}`;

  logRequest(logMessage);

  return fetch(url, opts)
    .then(response => {
      const headers = toHash(response.headers);
      const status = response.status;
      logMessage = `${logMessage} (${status} ${response.statusText})`;

      if (response.ok) {
        logSuccess(logMessage);

        return response.text().then(text => {
          if (callback) {
            callback(
              undefined,
              wrapResponse(headers, status, text, text, response)
            );
          }
          return response;
        });
      }

      logError(logMessage);
      return response.text().then(text => {
        if (callback) {
          callback(wrapResponse(headers, status, text, text, response));
        }
        return response;
      });
    })
    .catch(err => {
      // Unrecoverable errors
      callback(err);
      console.trace(err);
      throw err;
    });
}

/**
 * Perform a GET request.
 */
export function get(...args) {
  return request('GET', ...args);
}

/**
 * Perform a POST request.
 */
export function post(...args) {
  return request('POST', ...args);
}

/**
 * Perform a PUT request.
 */
export function put(...args) {
  return request('PUT', ...args);
}

/**
 * Perform a PATCH request.
 */
export function patch(...args) {
  return request('PATCH', ...args);
}

/**
 * Perform a DELETE request.
 */
export function del(...args) {
  return request('DELETE', ...args);
}
