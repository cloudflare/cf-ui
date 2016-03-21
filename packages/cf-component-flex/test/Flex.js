const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const Flex = require('../src/Flex');

describe('Flex', function() {
  it('should render', function() {
    assertEqualJSX(
      <Flex spacing={false}>Hello</Flex>,
      // should equal
      <div className="cf-flex">Hello</div>
    );
  });

  it('should render spacing', function() {
    assertEqualJSX(
      <Flex spacing={false}>Hello</Flex>,
      // should equal
      <div className="cf-flex">Hello</div>
    );

    assertEqualJSX(
      <Flex spacing="thin">Hello</Flex>,
      // should equal
      <div className="cf-flex cf-flex--thin">Hello</div>
    );

    assertEqualJSX(
      <Flex spacing="wide">Hello</Flex>,
      // should equal
      <div className="cf-flex cf-flex--wide">Hello</div>
    );
  });
});
