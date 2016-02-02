const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const ModalTitle = require('../src/ModalTitle');

describe('ModalTitle', function() {
  it('should render', function() {
    assertEqualJSX(
      <ModalTitle>ModalTitle</ModalTitle>,
      // should equal
      <h4 className="cf-modal__title">ModalTitle</h4>
    );
  });
});
