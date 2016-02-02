const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const ModalClose = require('../src/ModalClose');

describe('ModalClose', function() {
  it('should render', function() {
    assertEqualJSX(
      <ModalClose onClick={() => {}}/>,
      // should equal
      <span className="cf-modal__close"/>
    );
  });
});
