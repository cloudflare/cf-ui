import { get as httpGet } from 'cf-util-http';

function validateOptions(opts) {
  if (!opts.isComplete) {
    throw new Error('`poll` requires `isComplete`');
  }

  if (!opts.onComplete) {
    throw new Error('`poll` requires `onComplete`');
  }

  if (!opts.onError) {
    throw new Error('`poll` requires `onError`');
  }
}

export default function httpPoll(url, opts) {
  opts = opts || {};

  validateOptions(opts);

  const interval = opts.interval || 3000;
  const timeout = opts.timeout || 60000;

  let isCancelled = false;
  let currentAbort = null;
  let intervalId = null;
  let timeoutId = null;

  // Clean up state
  function cleanup() {
    clearTimeout(intervalId);
    clearTimeout(timeoutId);
    if (currentAbort) {
      currentAbort();
      currentAbort = null;
    }
  }

  // Cancel polling
  function cancel() {
    isCancelled = true;
    cleanup();
    if (opts.onCancel) opts.onCancel();
  }

  // Request success handler
  function onSuccess(res) {
    currentAbort = null;
    if (isCancelled) return;
    if (!opts.isComplete(res)) {
      intervalId = setTimeout(next, interval);
    } else {
      cleanup();
      opts.onComplete(res);
    }
  }

  // Request error handler
  function onError(res) {
    currentAbort = null;
    if (isCancelled) return;
    cleanup();
    opts.onError(res);
  }

  function next() {
    currentAbort = httpGet(url, opts.requestOpts, (err, res) => {
      if (err) {
        onError(err);
      } else {
        onSuccess(res);
      }
    });
  }

  next();

  if (timeout !== Infinity) {
    timeoutId = setTimeout(cancel, timeout);
  }

  return cancel;
}
