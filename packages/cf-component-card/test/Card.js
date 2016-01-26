import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Card from '../src/Card';

describe('Card', function() {
  it('should render', function() {
    assertEqualJSX(
      <Card>Card</Card>,
      // should equal
      <section className="cf-card">Card</section>
    );
  });
});
