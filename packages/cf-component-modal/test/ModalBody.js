const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
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
