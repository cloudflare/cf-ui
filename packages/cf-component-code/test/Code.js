const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const Code = require('../src/Code');

describe('Code', function() {
  it('should render', function() {
    assertEqualJSX(
      <Code>Hello</Code>,
      // should equal
      <code className="cf-code">Hello</code>
    );
  });
});
