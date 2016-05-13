const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Modal = require('../src/Modal');
const Gateway = require('react-gateway');
const ReactDOM = require('react-dom');
const assert = require('assert');

describe('Modal', function() {

  beforeEach(function() {
    this.root = document.createElement('div');
    document.body.innerHTML = '';
    document.body.appendChild(this.root);
  });

  it('should hide the modal when `isOpen` is `false`', function() {
    var modal = <Modal isOpen={false} onRequestClose={function() {}}/>;
    ReactDOM.render(modal, this.root);
    assert.equal(document.querySelectorAll('.cf-modal__backdrop-scroller').length, 0);
  });

  it('should render the modal when `isOpen` is `true`', function() {
    var modal = <Modal isOpen={true} onRequestClose={function() {}}/>;
    ReactDOM.render(modal, this.root);

    var backdropScroller = document.querySelectorAll('.cf-modal__backdrop-scroller');
    var backdropOuter = document.querySelectorAll('.cf-modal__backdrop-outer');
    var backdrop =  document.querySelectorAll('.cf-modal__backdrop');
    var cfModal = document.querySelectorAll('.cf-modal');

    assert.equal(backdropScroller.length, 1);
    assert.equal(backdropOuter.length, 1);
    assert.equal(backdrop.length, 1);
    assert.equal(cfModal.length, 1);
  });

  it('should add a `className` if `type` is `confirm`', function() {

    var modal = <Modal type="confirm" isOpen={true} onRequestClose={function() {}}/>;
    ReactDOM.render(modal, this.root);

    var cfModal = document.querySelectorAll('.cf-modal');
    assert.equal(cfModal[0].classList.contains('cf-modal--confirm'), true);
  });
});
