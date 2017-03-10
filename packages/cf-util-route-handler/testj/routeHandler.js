const assert = require('assert');
const {
  handleRoutes,
  routeTo,
  __resetRouteHandler
} = require('../src/routeHandler');

describe('routeHandler', function() {
  afterEach(function() {
    __resetRouteHandler();
  });

  test('should handle routes', function() {
    let called = false;
    handleRoutes(url => {
      called = true;
      assert.equal(url, '/route');
    });
    routeTo('/route');
    assert.equal(called, true);
  });

  test('should not throw an error when no handler has been setup', function() {
    assert.doesNotThrow(() => {
      routeTo('/route');
    });
  });

  test('should only ever allow one handler', function() {
    let called = false;
    handleRoutes(url => called = true);
    handleRoutes(url => {});
    routeTo('/route');
    assert.ok(called);
  });
});
