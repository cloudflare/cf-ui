const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Mark = require('../src/Mark');

describe('Mark', function() {
  it('should render', function() {
    assertEqualJSX(
      <Mark>Mark</Mark>,
      // should equal
      <mark className="cf-mark">Mark</mark>
    );
  });
});
