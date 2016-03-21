const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const Flex = require('../src/Flex');

describe('Flex', function() {
  it('should render', function() {
    assertEqualJSX(
      <Flex>Hello</Flex>,
      // should equal
      <div className="cf-flex">Hello</div>
    );
  });
});
