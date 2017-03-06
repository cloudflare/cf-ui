export default function series(funcs, callback) {
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
        callback(error);
      } else {
        results.push(result);
        next();
      }
    });
  }

  next();
}
