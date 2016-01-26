import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import ButtonGroup from '../src/ButtonGroup';

describe('ButtonGroup', function() {
  it('should render', function() {
    assertEqualJSX(
      <ButtonGroup>Hello</ButtonGroup>,
      // should equal
      <div className="cf-btn__group">Hello</div>
    );
  });
});
