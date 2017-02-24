const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const ModalClose = require('../src/ModalClose');
const Icon = require('cf-component-icon');

describe('ModalClose', function() {
  it('should render', function() {
    assertEqualJSX(
      <ModalClose onClick={() => {}} />,
      // should equal
      <span className="cf-modal__close">
        <Icon type="close" size="2x" />
      </span>
    );
  });

  it('should render with a label', function() {
    assertEqualJSX(
      <ModalClose label="label" onClick={() => {}} />,
      // should equal
      <span className="cf-modal__close">
        <Icon type="close" label="label" size="2x" />
      </span>
    );
  });
});
