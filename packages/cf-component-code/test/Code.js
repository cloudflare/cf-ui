const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
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
