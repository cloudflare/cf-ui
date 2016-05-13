const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Small = require('../src/Small');

describe('Small', function() {
  it('should render', function() {
    assertEqualJSX(
      <Small>Small</Small>,
      // should equal
      <small className="cf-small">Small</small>
    );
  });
});
