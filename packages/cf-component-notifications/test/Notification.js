const React = require('react');
const {expect} = require('chai');
const {render, unmountComponentAtNode} = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const Notification = require('../src/Notification');

// timeout as second arg is so annoying
function delay(timeout, cb) {
  setTimeout(cb, timeout);
}

describe('Notification', function() {
  beforeEach(function() {
    this.root = global.document.createElement('div');
    global.document.body.appendChild(this.root);
  });

  afterEach(function() {
    unmountComponentAtNode(this.root);
    global.document.body.removeChild(this.root);
  });

  it('should call onClose after a set delay', function(done) {
    let start = Date.now();

    let onClose = () => {
      let end = Date.now();
      expect(end - start).to.be.closeTo(200, 50);
      done();
    };

    render(
      <Notification type="info" message="Foo" delay={200} onClose={onClose}/>,
      this.root
    );
  });

  it('should persist when told to', function(done) {
    let called = false;
    let onClose = () => called = true;

    render(
      <Notification type="info" message="Bar" delay={0} persist={true} onClose={onClose}/>,
      this.root
    );

    delay(50, () => {
      expect(called).to.be.false;
      done();
    });
  });

  it('should pause the timeout while the mouse is hovering the notification', function(done) {
    let called = false;
    let onClose = () => called = true;

    let instance = render(
      <Notification type="info" message="Baz" delay={100} onClose={onClose}/>,
      this.root
    );

    delay(50, () => {
      TestUtils.Simulate.mouseEnter(
        TestUtils.findRenderedDOMComponentWithClass(instance, 'cf-notifications__item')
      );

      delay(150, () => {
        expect(called).to.be.false;
        TestUtils.Simulate.mouseLeave(
          TestUtils.findRenderedDOMComponentWithClass(instance, 'cf-notifications__item')
        );

        delay(150, () => {
          expect(called).to.be.true;
          done();
        });
      });
    });
  });

  it('should close on click', function(done) {
    let called = false;
    let onClose = () => called = true;

    let instance = render(
      <Notification type="info" message="Baz" delay={100} onClose={onClose}/>,
      this.root
    );

    delay(50, () => {
      TestUtils.Simulate.click(
        TestUtils.findRenderedDOMComponentWithClass(instance, 'cf-notifications__item_close')
      );
      expect(called).to.be.true;
      done();
    });
  });

  it('should not render a close button when closable is false', function() {
    let instance = render(
      <Notification type="info" message="Baz" closable={false} onClose={() => {}}/>,
      this.root
    );

    let found = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'cf-notifications__item_close')

    expect(found.length).to.equal(0);
  });

  it('should not render a progress when persist is true', function() {
    let instance = render(
      <Notification type="info" message="Baz" persist={true} onClose={() => {}}/>,
      this.root
    );

    let found = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'cf-notifications__item_progress')

    expect(found.length).to.equal(0);
  });
});
