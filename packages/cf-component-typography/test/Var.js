import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Var from '../src/Var';

describe('Var', function() {
  it('should render', function() {
    assertEqualJSX(
      <Var>Var</Var>,
      // should equal
      <var className="cf-var">Var</var>
    );
  });
});
