import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Underline from '../src/Underline';

describe('Underline', function() {
  it('should render', function() {
    assertEqualJSX(
      <Underline>Underline</Underline>,
      // should equal
      <u className="cf-underline">Underline</u>
    );
  });
});
