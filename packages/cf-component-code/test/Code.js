import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Code from '../src/Code';

describe('Code', function() {
  it('should render', function() {
    assertEqualJSX(
      <Code>Hello</Code>,
      // should equal
      <code className="cf-code">Hello</code>
    );
  });
});
