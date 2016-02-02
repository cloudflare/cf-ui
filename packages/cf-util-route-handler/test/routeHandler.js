const assert = require('assert');
const {handleRoutes, routeTo, __resetRouteHandler} = require('../src/routeHandler');

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

  it('should throw an error when no handler has been setup', function() {
    assert.throws(() => {
      routeTo('/route');
    });
  });

  it('should throw an error when trying to setup multiple handlers', function() {
    handleRoutes(url => {});
    assert.throws(() => {
      handleRoutes(url => {});
    });
  });
});
