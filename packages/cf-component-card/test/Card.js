const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const Card = require('../src/Card');

describe('Card', function() {
  it('should render', function() {
    assertEqualJSX(
      <Card>Card</Card>,
      // should equal
      <section className="cf-card">Card</section>
    );
  });
});
