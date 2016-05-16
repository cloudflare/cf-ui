const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const ModalActions = require('../src/ModalActions');

describe('ModalActions', function() {
  it('should render', function() {
    assertEqualJSX(
      <ModalActions>ModalActions</ModalActions>,
      // should equal
      <div className="cf-modal__actions">ModalActions</div>
    );
  });
});
