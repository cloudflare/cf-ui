const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Ins = require('../src/Ins');

describe('Ins', function() {
  it('should render', function() {
    assertEqualJSX(
      <Ins>Ins</Ins>,
      // should equal
      <ins className="cf-ins">Ins</ins>
    );
  });
});
