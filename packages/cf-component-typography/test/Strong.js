const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const Strong = require('../src/Strong');

describe('Strong', function() {
  it('should render', function() {
    assertEqualJSX(
      <Strong>Strong</Strong>,
      // should equal
      <strong className="cf-strong">Strong</strong>
    );
  });
});
