const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
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
