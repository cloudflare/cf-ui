import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Small from '../src/Small';

describe('Small', function() {
  it('should render', function() {
    assertEqualJSX(
      <Small>Small</Small>,
      // should equal
      <small className="cf-small">Small</small>
    );
  });
});
