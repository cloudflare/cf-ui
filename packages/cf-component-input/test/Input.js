import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Input from '../src/Input';

describe('Input', function() {
  it('should render', function() {
    assertEqualJSX(
      <Input
        name="example"
        value="content"
        onChange={() => {}}/>,
      // should equal
      <Input
        type="text"
        className="cf-input cf-input--text"
        name="example"
        value="content"
        onChange={() => {}}/>
    );
  });

  it('should render with type', function() {
    assertEqualJSX(
      <Input
        type="search"
        name="example"
        value="content"
        onChange={() => {}}/>,
      // should equal
      <Input
        type="search"
        className="cf-input cf-input--search"
        name="example"
        value="content"
        onChange={() => {}}/>
    );
  });
});
