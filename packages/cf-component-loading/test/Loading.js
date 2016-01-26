import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Loading from '../src/Loading';

describe('Loading', function() {
  it('should render', function() {
    assertEqualJSX(
      <Loading/>,
      <div className="cf-loading" role="status">
        <span className="cf-loading__label">Loading</span>
      </div>
    );
  });
});
