import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import DynamicContent from '../src/DynamicContent';

describe('DynamicContent', function() {
  it('should render', function() {
    assertEqualJSX(
      <DynamicContent dangerouslySetInnerHTML={{ __html: '<p>Hello World</p>' }}/>,
      // should equal
      <div className="cf-dynamic-content">
        <p>Hello World</p>
      </div>
    );
  });
});
