const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const CardLoadingText = require('../src/CardLoadingText');

describe('CardLoadingText', function() {
  it('should render', function() {
    assertEqualJSX(
      <CardLoadingText/>,
      // should equal
      <div className="cf-card__loading_text"/>
    );
  });
});
