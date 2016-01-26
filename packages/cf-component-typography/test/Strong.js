import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Strong from '../src/Strong';

describe('Strong', function() {
  it('should render', function() {
    assertEqualJSX(
      <Strong>Strong</Strong>,
      // should equal
      <strong className="cf-strong">Strong</strong>
    );
  });
});
