import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import CodeBlock from '../src/CodeBlock';
import Code from '../src/Code';

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
