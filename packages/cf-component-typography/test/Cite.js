const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const Cite = require('../src/Cite');

describe('Cite', function() {
  it('should render', function() {
    assertEqualJSX(
      <Cite>Cite</Cite>,
      // should equal
      <cite className="cf-cite">Cite</cite>
    );
  });
});
