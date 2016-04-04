const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const ModalClose = require('../src/ModalClose');

describe('ModalClose', function() {
  it('should render', function() {
    assertEqualJSX(
      <ModalClose onClick={() => {}}/>,
      // should equal
      <span className="cf-modal__close">
        <i className="cf-icon cf-icon--close cf-icon--2x"/>
      </span>
    );
  });

  it('should render with a label', function() {
    assertEqualJSX(
      <ModalClose label="label" onClick={() => {}}/>,
      // should equal
      <span className="cf-modal__close">
        <i className="cf-icon cf-icon--close cf-icon--2x">
          label
        </i>
      </span>
    );
  });

});
