import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import ModalActions from '../src/ModalActions';

describe('ModalActions', function() {
  it('should render', function() {
    assertEqualJSX(
      <ModalActions>ModalActions</ModalActions>,
      // should equal
      <div className="cf-modal__actions">ModalActions</div>
    );
  });
});
