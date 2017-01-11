const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const CardControl = require('../src/CardControl');

describe('CardControl', function() {
  it('should render', function() {
    assertEqualJSX(
      <CardControl>CardControl</CardControl>,
      // should equal
      <div className="cf-card__control">CardControl</div>
    );
  });
  it('should render wide', function() {
    assertEqualJSX(
      <CardControl wide>CardControl</CardControl>,
      // should equal
      <div className="cf-card__control cf-card__control--wide">CardControl</div>
    );
  });
});
