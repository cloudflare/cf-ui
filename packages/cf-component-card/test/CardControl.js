import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import CardControl from '../src/CardControl';

describe('CardControl', function() {
  it('should render', function() {
    assertEqualJSX(
      <CardControl>CardControl</CardControl>,
      // should equal
      <div className="cf-card__control">CardControl</div>
    );
  });
});
