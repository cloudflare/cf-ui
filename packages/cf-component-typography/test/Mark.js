import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Mark from '../src/Mark';

describe('Mark', function() {
  it('should render', function() {
    assertEqualJSX(
      <Mark>Mark</Mark>,
      // should equal
      <mark className="cf-mark">Mark</mark>
    );
  });
});
