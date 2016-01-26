import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Ins from '../src/Ins';

describe('Ins', function() {
  it('should render', function() {
    assertEqualJSX(
      <Ins>Ins</Ins>,
      // should equal
      <ins className="cf-ins">Ins</ins>
    );
  });
});
