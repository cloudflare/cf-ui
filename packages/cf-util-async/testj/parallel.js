import { parallel } from 'cf-util-async';

test('should call each function', done => {
  let count = 0;
  parallel(
    [cb => (count++, cb()), cb => (count++, cb()), cb => (count++, cb())],
    () => {
      expect(count).toBe(3);
      done();
    }
  );
});

test('should call each function in order', done => {
  let calls = [];
  parallel(
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

test('should call the next function before finishing the last one', done => {
  let called = false;
  parallel(
    [
      cb => setTimeout(() => ((called = true), cb()), 1),
      cb => {
        expect(called).toBeFalsy();
        cb();
      }
    ],
    done
  );
});

test('should not call the final callback before finishing all the functions', done => {
  let count = 0;
  parallel(
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
  parallel([cb => cb(errorInstance)], err => {
    expect(err).toBe(errorInstance);
    done();
  });
});

test('should call all the functions in the parallel even when one gets an error synchronously', done => {
  let called = false;
  parallel(
    [cb => cb(new Error('Oh no!')), cb => ((called = true), cb())],
    () => {}
  );
  expect(called).toBeTruthy();
  done();
});

test('should pass the results to the final callback as the second argument', done => {
  parallel(
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
    parallel([cb => (cb(), cb())], () => {});
  }).toThrow();
});
