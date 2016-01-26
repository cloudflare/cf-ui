import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import ModalBody from '../src/ModalBody';

describe('ModalBody', function() {
  it('should render', function() {
    assertEqualJSX(
      <ModalBody>ModalBody</ModalBody>,
      // should equal
      <div className="cf-modal__body">ModalBody</div>
    );
  });
});
