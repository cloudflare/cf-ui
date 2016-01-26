import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import CardLoadingText from '../src/CardLoadingText';

describe('CardLoadingText', function() {
  it('should render', function() {
    assertEqualJSX(
      <CardLoadingText/>,
      // should equal
      <div className="cf-card__loading_text"/>
    );
  });
});
