const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const Em = require('../src/Em');

describe('Em', function() {
  it('should render', function() {
    assertEqualJSX(
      <Em>Em</Em>,
      // should equal
      <em className="cf-em">Em</em>
    );
  });
});
