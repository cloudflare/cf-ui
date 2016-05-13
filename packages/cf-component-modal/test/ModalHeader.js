const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const ModalHeader = require('../src/ModalHeader');

describe('ModalHeader', function() {
  it('should render', function() {
    assertEqualJSX(
      <ModalHeader>ModalHeader</ModalHeader>,
      // should equal
      <header className="cf-modal__header">ModalHeader</header>
    );
  });
});
