const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const ModalTitle = require('../src/ModalTitle');
const {Heading} = require('cf-component-heading');

describe('ModalTitle', function() {
  it('should render', function() {
    assertEqualJSX(
      <ModalTitle>ModalTitle</ModalTitle>,
      // should equal
      <div className="cf-modal__title">
        <Heading size={3}>ModalTitle</Heading>
      </div>
    );
  });
});
