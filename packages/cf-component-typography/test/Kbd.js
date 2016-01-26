import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Kbd from '../src/Kbd';

describe('Kbd', function() {
  it('should render', function() {
    assertEqualJSX(
      <Kbd>Kbd</Kbd>,
      // should equal
      <kbd className="cf-kbd">Kbd</kbd>
    );
  });
});
