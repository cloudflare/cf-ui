const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const DropdownSeparator = require('../src/DropdownSeparator');

describe('DropdownSeparator', function() {
  it('should render with to', function() {
    assertEqualJSX(
      <DropdownSeparator/>,
      // should equal
      <div className="cf-dropdown__separator" role="separator"/>
    );
  });
});
