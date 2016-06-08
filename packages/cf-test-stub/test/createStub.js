const assert = require('assert');
const {createStub} = require('../src/index');

describe('createStub()', () => {
  it('should create a callable function', () => {
    const stub = createStub();
    assert.ok(typeof stub === 'function');
    stub();
  });

  it('should have a called property', () => {
    const stub = createStub();
    assert.ok(!stub.called);
    stub();
    assert.ok(stub.called);
  });

  it('should have a callCount property', () => {
    const stub = createStub();
    assert.equal(stub.callCount, 0);
    stub();
    assert.equal(stub.callCount, 1);
    stub();
    assert.equal(stub.callCount, 2);
  });

  it('should have a calls property', () => {
    const stub = createStub();
    assert.deepEqual(stub.calls, []);
    stub.call(1, 2, 3);
    assert.deepEqual(stub.calls, [{
      context: 1,
      args: [2, 3]
    }]);

    stub.call(4, 5, 6);
    assert.deepEqual(stub.calls, [{
      context: 1,
      args: [2, 3]
    }, {
      context: 4,
      args: [5, 6]
    }]);
  });

  const outsideStub = createStub();

  it('should not allow the stub to be used outside of the current test', () => {
    assert.throws(() => outsideStub.called);
    assert.throws(() => outsideStub.callCount);
    assert.throws(() => outsideStub.calls);
  });
});
