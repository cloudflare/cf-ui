import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import ModalTitle from '../src/ModalTitle';

describe('ModalTitle', function() {
  it('should render', function() {
    assertEqualJSX(
      <ModalTitle>ModalTitle</ModalTitle>,
      // should equal
      <h4 className="cf-modal__title">ModalTitle</h4>
    );
  });
});
