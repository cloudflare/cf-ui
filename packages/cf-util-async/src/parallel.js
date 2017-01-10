// @flow

import type {Func, Funcs, Callback} from './types';

function parallel<Err, Res>(
  funcs: Funcs<Err, Res>,
  callback: Callback<Err, Res>
) {
  const results: Array<Res> = [];

  let index = 0;
  let errored = false;

  for (let i = 0; i < funcs.length; i++) {
    let func = funcs[i];
    let called = false;

    func((error, result) => {
      if (called) {
        throw new Error('A callback can only be called once in parallel()');
      } else {
        called = true;
      }

      if (errored) {
        return;
      }

      if (error) {
        errored = true;
        callback(error, null);
        return;
      }

      results.push(result);

      if (++index === funcs.length) {
        callback(null, results);
      }
    });
  }
}

module.exports = parallel;
