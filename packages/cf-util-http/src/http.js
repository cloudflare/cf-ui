// @flow

import type {Headers, Query, Body, RequestError, Response} from 'superagent';

const superagent = require('superagent');
const createLogger = require('cf-util-logger');

const logRequest = createLogger('http:request');
const logError = createLogger('http:error');
const logSuccess = createLogger('http:success');

export type Methods =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE';

export type Result = {
  headers: Headers,
  status: number,
  body: Body,
  text: string
};

export type Callback =
  & ((err: null, result: Result) => mixed)
  & ((err: Result, result: null) => mixed);

export type Options = ?{
  method?: Methods,
  url?: string,
  headers?: Headers,
  parameters?: Query,
  body?: Body,
  callback?: Callback,
};

type OptionsComplete = {
  method: Methods,
  url: string,
  headers?: Headers,
  parameters?: Query,
  body?: Body,
  callback: Callback
};

export type Abort = () => void;

// Store beforeSend callbacks.
const beforeSendCallbacks = [];

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
function beforeSend(callback: (opts: OptionsComplete) => mixed) {
  beforeSendCallbacks.push(callback);
}

/**
 * Perform an http request.
 *
 * ```js
 * request('POST', '/posts', {
 *   body: {
 *     title: 'A New Post',
 *     content: 'Contents of the new post.'
 *   }
 * }, function(res) {
 *   console.log(res.body); // > { result: { id: 1, title: 'A New Post', content: 'Contents of the new post.' } }
 * }, function(err) {
 *   console.log(res.body); // > { errors: [{ message: 'Error!' }] }
 * });
 * ```
 *
 * @param {String} method - GET/POST/PUT/PATCH/DELETE
 * @param {String} url
 * @param {Object} [opts]
 * @param {Object} [opts.parameters]
 * @param {Object} [opts.headers]
 * @param {Object} [opts.body]
 * @param {Function} [callback]
 * @returns {Function} Abort request.
 */
function request(method: Methods, url: string, opts: Options, callback: Callback): Abort {
  const options: OptionsComplete = { ...opts, method, url, callback };

  // Allow beforeSend to modify request options.
  beforeSendCallbacks.forEach(cb => cb(options));

  // Configure request
  const req = superagent(options.method, options.url);

  if (options.parameters) {
    req.query(options.parameters);
  }

  if (options.headers) {
    req.set(options.headers);
  }

  if (options.body) {
    req.send(options.body);
  }

  let logMessage = `${options.method} ${options.url}`;

  logRequest(logMessage);

  // Send request
  req.end((err, res) => {
    res = ((res: any): Response); // << Fix `any`
    logMessage = `${logMessage} (${res.status} ${res.statusText})`;

    const result = {
      headers: res.headers,
      status: res.status,
      body: res.body,
      text: res.text
    };

    if (err) {
      logError(logMessage);
      options.callback(result, null);
    } else {
      logSuccess(logMessage);
      options.callback(null, result);
    }
  });

  // Return abort function
  return function() {
    req.abort();
  };
}

/**
 * Perform a GET request.
 */
function get(url: string, opts: Options, callback: Callback): Abort {
  return request('GET', url, opts, callback);
}

/**
 * Perform a POST request.
 */
function post(url: string, opts: Options, callback: Callback): Abort {
  return request('POST', url, opts, callback);
}

/**
 * Perform a PUT request.
 */
function put(url: string, opts: Options, callback: Callback): Abort {
  return request('PUT', url, opts, callback);
}

/**
 * Perform a PATCH request.
 */
function patch(url: string, opts: Options, callback: Callback): Abort {
  return request('PATCH', url, opts, callback);
}

/**
 * Perform a DELETE request.
 */
function del(url: string, opts: Options, callback: Callback): Abort {
  return request('DELETE', url, opts, callback);
}

module.exports = {beforeSend, request, get, post, put, patch, del};
