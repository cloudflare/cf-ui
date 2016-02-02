const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const CodeBlock = require('../src/CodeBlock');
const Code = require('../src/Code');

describe('CodeBlock', function() {
  it('should render', function() {
    assertEqualJSX(
      <CodeBlock>Hello</CodeBlock>,
      // should equal
      <pre className="cf-code__block">
        <Code>Hello</Code>
      </pre>
    );
  });
});
