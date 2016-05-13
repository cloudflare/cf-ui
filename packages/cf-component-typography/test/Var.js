const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Var = require('../src/Var');

describe('Var', function() {
  it('should render', function() {
    assertEqualJSX(
      <Var>Var</Var>,
      // should equal
      <var className="cf-var">Var</var>
    );
  });
});
