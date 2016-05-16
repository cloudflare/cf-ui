const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const CardSection = require('../src/CardSection');

describe('CardSection', function() {
  it('should render', function() {
    assertEqualJSX(
      <CardSection>CardSection</CardSection>,
      // should equal
      <div className="cf-card__section cf-card__section--default">CardSection</div>
    );
  });

  it('should render with status', function() {
    assertEqualJSX(
      <CardSection status="error">CardSection</CardSection>,
      // should equal
      <div className="cf-card__section cf-card__section--error">CardSection</div>
    );
  });
});
