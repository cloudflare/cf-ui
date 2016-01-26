import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Strike from '../src/Strike';

describe('Strike', function() {
  it('should render', function() {
    assertEqualJSX(
      <Strike>Strike</Strike>,
      // should equal
      <s className="cf-strike">Strike</s>
    );
  });
});
