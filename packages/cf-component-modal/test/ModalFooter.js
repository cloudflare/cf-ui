const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const ModalFooter = require('../src/ModalFooter');

describe('ModalFooter', function() {
  it('should render', function() {
    assertEqualJSX(
      <ModalFooter>ModalFooter</ModalFooter>,
      // should equal
      <div className="cf-modal__footer">ModalFooter</div>
    );
  });
});
