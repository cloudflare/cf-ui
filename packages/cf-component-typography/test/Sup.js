import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Sup from '../src/Sup';

describe('Sup', function() {
  it('should render', function() {
    assertEqualJSX(
      <Sup>Sup</Sup>,
      // should equal
      <sup className="cf-sup">Sup</sup>
    );
  });
});
