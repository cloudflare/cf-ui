import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import ModalClose from '../src/ModalClose';

describe('ModalClose', function() {
  it('should render', function() {
    assertEqualJSX(
      <ModalClose onClick={() => {}}/>,
      // should equal
      <span className="cf-modal__close"/>
    );
  });
});
