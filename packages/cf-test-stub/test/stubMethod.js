const assert = require('assert');
const { stubMethod } = require('../src/index');

describe('stubMethod()', () => {
  it('should create an object', () => {
    const obj = { method() {} };
    const stub = stubMethod(obj, 'method', () => {});
    assert.ok(typeof stub === 'object');
  });

  it('should have a called property', () => {
    const obj = { method() {} };
    const stub = stubMethod(obj, 'method', () => {});
    assert.ok(!stub.called);
    obj.method();
    assert.ok(stub.called);
  });

  it('should have a callCount property', () => {
    const obj = { method() {} };
    const stub = stubMethod(obj, 'method', () => {});
    assert.equal(stub.callCount, 0);
    obj.method();
    assert.equal(stub.callCount, 1);
    obj.method();
    assert.equal(stub.callCount, 2);
  });

  it('should have a calls property', () => {
    const obj = { method() {} };
    const stub = stubMethod(obj, 'method', () => {});
    assert.deepEqual(stub.calls, []);
    obj.method.call(1, 2, 3);
    assert.deepEqual(stub.calls, [
      {
        context: 1,
        args: [2, 3]
      }
    ]);

    obj.method.call(4, 5, 6);
    assert.deepEqual(stub.calls, [
      {
        context: 1,
        args: [2, 3]
      },
      {
        context: 4,
        args: [5, 6]
      }
    ]);
  });

  it('should not call the original method', () => {
    let called = false;
    const obj = { method: () => called = true };
    const stub = stubMethod(obj, 'method', () => {});
    obj.method();
    assert.ok(!called);
  });

  it('should call the replacement method', () => {
    let called = false;
    const obj = { method() {} };
    const stub = stubMethod(obj, 'method', () => called = true);
    obj.method();
    assert.ok(called);
  });

  it('should be able to restore the stubbed method', () => {
    let called = false;
    const obj = { method: () => called = true };
    const stub = stubMethod(obj, 'method', () => {});
    stub.restore();
    obj.method();
    assert.ok(called);
  });

  const outsideObj = { method() {} };
  const outsideStub = stubMethod(outsideObj, 'method', () => {});

  it('should not allow the stub to be used outside of the current test', () => {
    assert.throws(() => outsideStub.called);
    assert.throws(() => outsideStub.callCount);
    assert.throws(() => outsideStub.calls);
    assert.throws(() => outsideStub.restore());
  });

  const automaticRestoreObj = { method() {} };
  let automaticRestoreCalled = false;

  it('[[this is fake test for the next test]]', () => {
    stubMethod(automaticRestoreObj, 'method', () => {
      automaticRestoreCalled = true;
    });
  });

  it('should automatically restore methods after tests', () => {
    automaticRestoreObj.method();
    assert.ok(!automaticRestoreCalled);
  });
});
