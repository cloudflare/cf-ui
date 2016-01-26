import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import ModalHeader from '../src/ModalHeader';

describe('ModalHeader', function() {
  it('should render', function() {
    assertEqualJSX(
      <ModalHeader>ModalHeader</ModalHeader>,
      // should equal
      <header className="cf-modal__header">ModalHeader</header>
    );
  });
});
