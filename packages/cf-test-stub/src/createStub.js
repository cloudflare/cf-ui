const sinon = require('sinon');

let uniqueId = 0;
let stubs = {};

afterEach(() => {
  stubs = {};
});

function initStub() {
  const stubId = uniqueId++;
  stubs[stubId] = sinon.stub();
  return stubId;
}

function getStub(stubId) {
  const stub = stubs[stubId];
  if (!stub) throw new Error('Stubs cannot be reused after the test that created them');
  return stub;
}

function createStub() {
  const stubId = initStub();

  return {
    get called() {
      return getStub(stubId).called;
    },

    get callCount() {
      return getStub(stubId).callCount;
    }
  };
}

module.exports = createStub;
