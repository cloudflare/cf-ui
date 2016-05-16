const sinon = require('sinon');

let sandbox;

beforeEach(() => {
  sandbox = sinon.sandbox.create();
});

afterEach(() => {
  sandbox.restore();
});

function stubMethod(obj, method, func) {
  const stub = sandbox.stub(obj, method, func);

  return {
    get called() {
      return stub.called;
    },

    get callCount() {
      return stub.callCount;
    },

    restore() {
      stub.restore();
    }
  };
}

module.exports = stubMethod;
