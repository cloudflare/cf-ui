import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Cite from '../src/Cite';

describe('Cite', function() {
  it('should render', function() {
    assertEqualJSX(
      <Cite>Cite</Cite>,
      // should equal
      <cite className="cf-cite">Cite</cite>
    );
  });
});
