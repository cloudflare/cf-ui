import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import CardContent from '../src/CardContent';

describe('CardContent', function() {
  it('should render', function() {
    assertEqualJSX(
      <CardContent title="Title">CardContent</CardContent>,
      // should equal
      <div className="cf-card__content">
        <h3 className="cf-card__title">Title</h3>
        CardContent
      </div>
    );
  });
});
