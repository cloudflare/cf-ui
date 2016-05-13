const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Samp = require('../src/Samp');

describe('Samp', function() {
  it('should render', function() {
    assertEqualJSX(
      <Samp>Samp</Samp>,
      // should equal
      <samp className="cf-samp">Samp</samp>
    );
  });
});
