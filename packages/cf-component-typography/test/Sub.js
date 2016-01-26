import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Sub from '../src/Sub';

describe('Sub', function() {
  it('should render', function() {
    assertEqualJSX(
      <Sub>Sub</Sub>,
      // should equal
      <sub className="cf-sub">Sub</sub>
    );
  });
});
