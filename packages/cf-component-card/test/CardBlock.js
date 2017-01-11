const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const CardBlock = require('../src/CardBlock');

describe('CardBlock', function() {
  it('should render', function() {
    assertEqualJSX(
      <CardBlock>CardBlock</CardBlock>,
      // should equal
      <div className="cf-card__block">CardBlock</div>
    );
  });
});
