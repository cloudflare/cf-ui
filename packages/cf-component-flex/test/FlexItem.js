const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const FlexItem = require('../src/FlexItem');

describe('FlexItem', function() {
  it('should render', function() {
    assertEqualJSX(
      <FlexItem>Hello</FlexItem>,
      // should equal
      <div className="cf-flex__item">Hello</div>
    );
  });

  it('should render collapsed', function() {
    assertEqualJSX(
      <FlexItem collapse>Hello</FlexItem>,
      // should equal
      <div className="cf-flex__item cf-flex__item--collapse">Hello</div>
    );
  });
});
