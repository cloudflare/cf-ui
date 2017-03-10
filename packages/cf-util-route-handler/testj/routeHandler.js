import {
  handleRoutes,
  routeTo,
  __resetRouteHandler
} from 'cf-util-route-handler';

beforeEach(() => {
  // don't litter test's output with console.error
  global.console.error = () => null;
  __resetRouteHandler();
});

test('should handle routes', () => {
  let called = false;
  handleRoutes(url => {
    called = true;
    expect(url).toBe('/route');
  });
  routeTo('/route');
  expect(called).toBeTruthy();
});

test('should not throw an error when no handler has been setup', () => {
  expect(() => {
    routeTo('/route');
  }).not.toThrow();
});

test('should only ever allow one handler', () => {
  let called = false;
  handleRoutes(url => called = true);
  handleRoutes(url => {});
  routeTo('/route');
  expect(called).toBeTruthy();
});
