const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const Text = require('../src/Text');

describe('Text', function() {
  it('should render size', function() {
    assertEqualJSX(
      <Text size="normal">Hello</Text>,
      // should equal
      <div className="cf-text--normal">Hello</div>
    );
  });

  it('should render align', function() {
    assertEqualJSX(
      <Text align="center">Hello</Text>,
      // should equal
      <div className="cf-text--center">Hello</div>
    );
  });

  it('should render type', function() {
    assertEqualJSX(
      <Text type="info">Hello</Text>,
      // should equal
      <div className="cf-text--info">Hello</div>
    );
  });

  it('should render case', function() {
    assertEqualJSX(
      <Text case="uppercase">Hello</Text>,
      // should equal
      <div className="cf-text--uppercase">Hello</div>
    );
  });
});
