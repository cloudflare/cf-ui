const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const Kbd = require('../src/Kbd');

describe('Kbd', function() {
  it('should render', function() {
    assertEqualJSX(
      <Kbd>Kbd</Kbd>,
      // should equal
      <kbd className="cf-kbd">Kbd</kbd>
    );
  });
});
