import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Em from '../src/Em';

describe('Em', function() {
  it('should render', function() {
    assertEqualJSX(
      <Em>Em</Em>,
      // should equal
      <em className="cf-em">Em</em>
    );
  });
});
