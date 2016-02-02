const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const Heading = require('../src/Heading');

describe('Heading', function() {
  it('should render size', function() {
    assertEqualJSX(
      <Heading size={2}>Heading</Heading>,
      // should equal
      <h2 className="cf-heading cf-heading--2">Heading</h2>
    );
  });
});
