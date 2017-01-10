// @flow

import type {Func, Funcs, Callback} from './types';

function series<Err, Res>(
  funcs: Funcs<Err, Res>,
  callback: Callback<Err, Res>
) {
  const results = [];
  let index = 0;

  function next() {
    const func = funcs[index++];

    if (!func) {
      callback(null, results);
      return;
    }

    let called = false;

    func((error, result) => {
      if (called) {
        throw new Error('A callback can only be called once in series()');
      } else {
        called = true;
      }

      if (error) {
        callback(error, null);
      } else {
        results.push(result);
        next();
      }
    });
  }

  next();
}

module.exports = series;
