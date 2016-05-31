let current = 0;
let restores = [];

beforeEach(() => current++);
afterEach(() => {
  restores.forEach(restore => restore());
  restores = [];
});

function assertActive(test) {
  if (test !== current) {
    throw new Error('Stubs cannot be reused after the test that created them');
  }
}

function defineGetter(test, stub, methodName, method) {
  Object.defineProperty(stub, methodName, {
    get: () => {
      assertActive(test);
      return method();
    }
  });
}

function createStub() {
  const test = current;

  let called = false;
  let callCount = 0;
  let calls = [];

  function stub(...args) {
    assertActive(test);
    called = true;
    callCount++;
    calls.push({
      context: this,
      args: args
    });
  }

  defineGetter(test, stub, 'called', () => called);
  defineGetter(test, stub, 'callCount', () => callCount);
  defineGetter(test, stub, 'calls', () => calls);

  return stub;
}

function stubMethod(obj, methodName) {
  const test = current;
  const prev = obj[methodName];
  const stub = createStub();

  let restored = false;

  stub.restore = () => {
    assertActive(test);
    if (!restored) {
      obj[methodName] = prev;
      restored = true;
    }
  };

  restores.push(stub.restore);

  return stub;
}

exports.createStub = createStub;
exports.stubMethod = stubMethod;
