const assert = require('assert');
const { handleRoutes, routeTo, __resetRouteHandler } = require(
  '../src/routeHandler'
);

describe('routeHandler', function() {
  afterEach(function() {
    __resetRouteHandler();
  });

  it('should handle routes', function() {
    let called = false;
    handleRoutes(url => {
      called = true;
      assert.equal(url, '/route');
    });
    routeTo('/route');
    assert.equal(called, true);
  });

  it('should not throw an error when no handler has been setup', function() {
    assert.doesNotThrow(() => {
      routeTo('/route');
    });
  });

  it('should only ever allow one handler', function() {
    let called = false;
    handleRoutes(url => called = true);
    handleRoutes(url => {});
    routeTo('/route');
    assert.ok(called);
  });
});
