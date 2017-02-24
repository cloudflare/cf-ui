const assert = require('assert');
const { series } = require('../src/index');

describe('series()', () => {
  it('should call each function', done => {
    let count = 0;
    series(
      [cb => (count++, cb()), cb => (count++, cb()), cb => (count++, cb())],
      () => {
        assert.equal(count, 3);
        done();
      }
    );
  });

  it('should call each function in order', done => {
    let calls = [];
    series(
      [
        cb => (calls.push(1), cb()),
        cb => (calls.push(2), cb()),
        cb => (calls.push(3), cb())
      ],
      () => {
        assert.deepEqual(calls, [1, 2, 3]);
        done();
      }
    );
  });

  it(
    'should not call the next function before finishing the last one',
    done => {
      let called = false;
      series(
        [
          cb => setTimeout(() => (called = true, cb()), 1),
          cb => {
            assert.ok(
              called,
              'second callback was called before first function was complete'
            );
            cb();
          }
        ],
        done
      );
    }
  );

  it(
    'should not call the final callback before finishing all the functions',
    done => {
      let count = 0;
      series(
        [
          cb => setTimeout(() => (count++, cb()), 1),
          cb => setTimeout(() => (count++, cb()), 1),
          cb => setTimeout(() => (count++, cb()), 1)
        ],
        () => {
          assert.equal(count, 3);
          done();
        }
      );
    }
  );

  it(
    'should pass an error to the final callback as the first argument',
    done => {
      const errorInstance = new Error('Oh no!');
      series([cb => cb(errorInstance)], err => {
        assert.equal(err, errorInstance);
        done();
      });
    }
  );

  it(
    'should stop calling the functions in the series after getting an error',
    done => {
      let called = false;
      series(
        [cb => cb(new Error('Oh no!')), cb => (called = true, cb())],
        () => {
          assert.ok(!called, 'second function should not have been called');
          done();
        }
      );
    }
  );

  it(
    'should pass the results to the final callback as the second argument',
    done => {
      series([cb => cb(null, 1), cb => cb(null, 2), cb => cb(null, 3)], (
        err,
        results
      ) => {
        if (err) return done(err);
        assert.deepEqual(results, [1, 2, 3]);
        done();
      });
    }
  );

  it('should not allow a callback to be called twice', () => {
    assert.throws(() => {
      series([cb => (cb(), cb())], () => {});
    });
  });
});
