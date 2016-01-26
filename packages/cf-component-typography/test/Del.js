import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Del from '../src/Del';

describe('Del', function() {
  it('should render', function() {
    assertEqualJSX(
      <Del>Del</Del>,
      // should equal
      <del className="cf-del">Del</del>
    );
  });
});
