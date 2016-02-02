const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const Del = require('../src/Del');

describe('Del', function() {
  it('should render', function() {
    assertEqualJSX(
      <Del>Del</Del>,
      // should equal
      <del className="cf-del">Del</del>
    );
  });
});
