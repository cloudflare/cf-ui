export default function parallel(funcs, callback) {
  const results = [];

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
        callback(error);
        return;
      }

      results.push(result);

      if (++index === funcs.length) {
        callback(null, results);
      }
    });
  }
}
