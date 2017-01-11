// @flow

declare var beforeEach: (cb: () => mixed) => void;
declare var afterEach: (cb: () => mixed) => void;

type StubObject = {
  called: boolean,
  callCount: number,
  calls: Array<{context: mixed, args: Array<mixed>}>
};

type Stub = StubObject & {
  (...args: Array<mixed>): void
};

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

function createStub(): Stub {
  const test = current;

  let called = false;
  let callCount = 0;
  let calls = [];

  function stub(...args: Array<mixed>) {
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

  return ((stub: any): Stub);
}

function stubMethod(obj: {}, methodName: string, method: () => mixed): StubObject {
  const test = current;
  const prev: mixed = obj[methodName];

  let called = false;
  let callCount = 0;
  let calls = [];
  let restored = false;

  obj[methodName] = function(...args) {
    assertActive(test);
    called = true;
    callCount++;
    calls.push({
      context: this,
      args: args
    });
    method.apply(this, args);
  };

  const stub = {};

  defineGetter(test, stub, 'called', () => called);
  defineGetter(test, stub, 'callCount', () => callCount);
  defineGetter(test, stub, 'calls', () => calls);

  function restore() {
    if (!restored) {
      obj[methodName] = prev;
      restored = true;
    }
  }

  stub.restore = () => {
    assertActive(test);
    restore();
  };

  restores.push(restore);

  return ((stub: any): StubObject);
}

exports.createStub = createStub;
exports.stubMethod = stubMethod;
