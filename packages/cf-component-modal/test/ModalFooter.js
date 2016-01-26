import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import ModalFooter from '../src/ModalFooter';

describe('ModalFooter', function() {
  it('should render', function() {
    assertEqualJSX(
      <ModalFooter>ModalFooter</ModalFooter>,
      // should equal
      <div className="cf-modal__footer">ModalFooter</div>
    );
  });
});
