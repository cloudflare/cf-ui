const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const Strike = require('../src/Strike');

describe('Strike', function() {
  it('should render', function() {
    assertEqualJSX(
      <Strike>Strike</Strike>,
      // should equal
      <s className="cf-strike">Strike</s>
    );
  });
});
