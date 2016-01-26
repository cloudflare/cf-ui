import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Samp from '../src/Samp';

describe('Samp', function() {
  it('should render', function() {
    assertEqualJSX(
      <Samp>Samp</Samp>,
      // should equal
      <samp className="cf-samp">Samp</samp>
    );
  });
});
