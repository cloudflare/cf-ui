import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Textarea from '../src/Textarea';

describe('Textarea', function() {
  it('should render', function() {
    assertEqualJSX(
      <Textarea
        name="example"
        value="content"
        onChange={() => {}}/>,
      // should equal
      <textarea
        className="cf-textarea"
        name="example"
        value="content"
        onChange={() => {}}/>
    );
  });
});
