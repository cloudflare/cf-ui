import { createStub } from 'cf-test-stub';

test('should create a callable function', () => {
  const stub = createStub();
  expect(typeof stub === 'function').toBeTruthy();
  stub();
});

test('should have a called property', () => {
  const stub = createStub();
  expect(!stub.called).toBeTruthy();
  stub();
  expect(stub.called).toBeTruthy();
});

test('should have a callCount property', () => {
  const stub = createStub();
  expect(stub.callCount).toBe(0);
  stub();
  expect(stub.callCount).toBe(1);
  stub();
  expect(stub.callCount).toBe(2);
});

test('should have a calls property', () => {
  const stub = createStub();
  expect(stub.calls).toEqual([]);
  stub.call(1, 2, 3);
  expect(stub.calls).toEqual([
    {
      context: 1,
      args: [2, 3]
    }
  ]);

  stub.call(4, 5, 6);
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

const outsideStub = createStub();

test('should not allow the stub to be used outside of the current test', () => {
  expect(() => outsideStub.called).toThrow();
  expect(() => outsideStub.callCount).toThrow();
  expect(() => outsideStub.calls).toThrow();
});
