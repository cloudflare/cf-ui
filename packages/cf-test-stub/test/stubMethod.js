import { stubMethod } from 'cf-test-stub';

test('should create an object', () => {
  const obj = { method() {} };
  const stub = stubMethod(obj, 'method', () => {});
  expect(typeof stub === 'object').toBeTruthy();
});

test('should have a called property', () => {
  const obj = { method() {} };
  const stub = stubMethod(obj, 'method', () => {});
  expect(stub.called).toBeFalsy();
  obj.method();
  expect(stub.called).toBeTruthy();
});

test('should have a callCount property', () => {
  const obj = { method() {} };
  const stub = stubMethod(obj, 'method', () => {});
  expect(stub.callCount).toBe(0);
  obj.method();
  expect(stub.callCount).toBe(1);
  obj.method();
  expect(stub.callCount).toBe(2);
});

test('should have a calls property', () => {
  const obj = { method() {} };
  const stub = stubMethod(obj, 'method', () => {});
  expect(stub.calls).toEqual([]);
  obj.method.call(1, 2, 3);
  expect(stub.calls).toEqual([
    {
      context: 1,
      args: [2, 3]
    }
  ]);

  obj.method.call(4, 5, 6);
  expect(stub.calls).toEqual([
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

test('should not call the original method', () => {
  let called = false;
  const obj = { method: () => called = true };
  const stub = stubMethod(obj, 'method', () => {});
  obj.method();
  expect(called).toBeFalsy();
});

test('should call the replacement method', () => {
  let called = false;
  const obj = { method() {} };
  const stub = stubMethod(obj, 'method', () => called = true);
  obj.method();
  expect(called).toBeTruthy();
});

test('should be able to restore the stubbed method', () => {
  let called = false;
  const obj = { method: () => called = true };
  const stub = stubMethod(obj, 'method', () => {});
  stub.restore();
  obj.method();
  expect(called).toBeTruthy();
});

const outsideObj = { method() {} };
const outsideStub = stubMethod(outsideObj, 'method', () => {});

test('should not allow the stub to be used outside of the current test', () => {
  expect(() => outsideStub.called).toThrow();
  expect(() => outsideStub.callCount).toThrow();
  expect(() => outsideStub.calls).toThrow();
  expect(() => outsideStub.restore()).toThrow();
});

const automaticRestoreObj = { method() {} };
let automaticRestoreCalled = false;

test('[[this is fake test for the next test]]', () => {
  stubMethod(automaticRestoreObj, 'method', () => {
    automaticRestoreCalled = true;
  });
});

test('should automatically restore methods after tests', () => {
  automaticRestoreObj.method();
  expect(automaticRestoreCalled).toBeFalsy();
});
