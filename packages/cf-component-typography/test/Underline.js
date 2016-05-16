const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Underline = require('../src/Underline');

describe('Underline', function() {
  it('should render', function() {
    assertEqualJSX(
      <Underline>Underline</Underline>,
      // should equal
      <u className="cf-underline">Underline</u>
    );
  });
});
