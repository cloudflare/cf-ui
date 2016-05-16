const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const ModalBody = require('../src/ModalBody');

describe('ModalBody', function() {
  it('should render', function() {
    assertEqualJSX(
      <ModalBody>ModalBody</ModalBody>,
      // should equal
      <div className="cf-modal__body">ModalBody</div>
    );
  });
});
