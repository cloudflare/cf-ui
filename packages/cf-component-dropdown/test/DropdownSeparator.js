import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import DropdownSeparator from '../src/DropdownSeparator';

describe('DropdownSeparator', function() {
  it('should render with to', function() {
    assertEqualJSX(
      <DropdownSeparator/>,
      // should equal
      <div className="cf-dropdown__separator" role="separator"/>
    );
  });
});
