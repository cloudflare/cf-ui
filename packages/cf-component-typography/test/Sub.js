const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Sub = require('../src/Sub');

describe('Sub', function() {
  it('should render', function() {
    assertEqualJSX(
      <Sub>Sub</Sub>,
      // should equal
      <sub className="cf-sub">Sub</sub>
    );
  });
});
