import superagent from 'superagent';
import createLogger from 'cf-util-logger';

const logRequest = createLogger('http:request');
const logError = createLogger('http:error');
const logSuccess = createLogger('http:success');

// Mapping of http request types to superagent methods.
const METHODS = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'del'
};

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
function beforeSend(callback) {
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
function request(method, url, opts, callback) {
  opts = opts || {};

  opts.method = method;
  opts.url = url;
  opts.callback = callback;

  // Allow beforeSend to modify request options.
  beforeSendCallbacks.forEach(cb => cb(opts));

  // Configure request
  const req = superagent[METHODS[opts.method]](opts.url);

  if (opts.parameters) {
    req.query(opts.parameters);
  }

  if (opts.headers) {
    req.set(opts.headers);
  }

  if (opts.body) {
    req.send(opts.body);
  }

  let logMessage = `${opts.method} ${opts.url}`;

  logRequest(logMessage);

  // Send request
  req.end((err, res) => {
    logMessage = `${logMessage} (${res.status} ${res.statusText})`;

    const result = {
      headers: res.headers,
      status: res.status,
      body: res.body,
      text: res.text
    };

    if (err) {
      logError(logMessage);
      opts.callback(result);
    } else {
      logSuccess(logMessage);
      opts.callback(null, result);
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
function get(...args) {
  return request('GET', ...args);
}

/**
 * Perform a POST request.
 */
function post(...args) {
  return request('POST', ...args);
}

/**
 * Perform a PUT request.
 */
function put(...args) {
  return request('PUT', ...args);
}

/**
 * Perform a PATCH request.
 */
function patch(...args) {
  return request('PATCH', ...args);
}

/**
 * Perform a DELETE request.
 */
function del(...args) {
  return request('DELETE', ...args);
}

export default { beforeSend, request, get, post, put, patch, del };
