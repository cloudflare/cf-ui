import { series } from 'cf-util-async';

test('should call each function', done => {
  let count = 0;
  series(
    [cb => (count++, cb()), cb => (count++, cb()), cb => (count++, cb())],
    () => {
      expect(count).toBe(3);
      done();
    }
  );
});

test('should call each function in order', done => {
  let calls = [];
  series(
    [
      cb => (calls.push(1), cb()),
      cb => (calls.push(2), cb()),
      cb => (calls.push(3), cb())
    ],
    () => {
      expect(calls).toEqual([1, 2, 3]);
      done();
    }
  );
});

test('should not call the next function before finishing the last one', done => {
  let called = false;
  series(
    [
      cb => setTimeout(() => ((called = true), cb()), 1),
      cb => {
        expect(called).toBeTruthy();
        cb();
      }
    ],
    done
  );
});

test('should not call the final callback before finishing all the functions', done => {
  let count = 0;
  series(
    [
      cb => setTimeout(() => (count++, cb()), 1),
      cb => setTimeout(() => (count++, cb()), 1),
      cb => setTimeout(() => (count++, cb()), 1)
    ],
    () => {
      expect(count).toBe(3);
      done();
    }
  );
});

test('should pass an error to the final callback as the first argument', done => {
  const errorInstance = new Error('Oh no!');
  series([cb => cb(errorInstance)], err => {
    expect(err).toBe(errorInstance);
    done();
  });
});

test('should stop calling the functions in the series after getting an error', done => {
  let called = false;
  series([cb => cb(new Error('Oh no!')), cb => ((called = true), cb())], () => {
    expect(called).toBeFalsy();
    done();
  });
});

test('should pass the results to the final callback as the second argument', done => {
  series(
    [cb => cb(null, 1), cb => cb(null, 2), cb => cb(null, 3)],
    (err, results) => {
      if (err) return done(err);
      expect(results).toEqual([1, 2, 3]);
      done();
    }
  );
});

test('should not allow a callback to be called twice', () => {
  expect(() => {
    series([cb => (cb(), cb())], () => {});
  }).toThrow();
});
