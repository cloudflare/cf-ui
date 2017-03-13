import React from 'react';
import renderer from 'react-test-renderer';
import { render, unmountComponentAtNode } from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { Notification } from 'cf-component-notifications';
import jsdom from 'jsdom';

// timeout as second arg is so annoying
function delay(timeout, cb) {
  setTimeout(cb, timeout);
}

beforeEach(function() {
  const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
  global.document = doc;
  global.window = doc.defaultView;
  global.root = global.document.createElement('div');
  global.document.body.appendChild(global.root);
});

afterEach(function() {
  unmountComponentAtNode(global.root);
  global.document.body.removeChild(global.root);
});

test('should call onClose after a set delay', done => {
  let start = Date.now();

  let onClose = () => {
    let end = Date.now();
    expect(end - start).toBeLessThan(300);
    expect(end - start).toBeGreaterThan(50);
    done();
  };

  render(
    <Notification type="info" message="Foo" delay={200} onClose={onClose} />,
    global.root
  );
});

test('should persist when told to', done => {
  let called = false;
  let onClose = () => called = true;

  render(
    <Notification
      type="info"
      message="Bar"
      delay={0}
      persist={true}
      onClose={onClose}
    />,
    global.root
  );

  delay(50, () => {
    expect(called).toBeFalsy();
    done();
  });
});

test('should pause the timeout while the mouse is hovering the notification', done => {
  let called = false;
  let onClose = () => called = true;

  let instance = render(
    <Notification type="info" message="Baz" delay={100} onClose={onClose} />,
    global.root
  );

  delay(50, () => {
    TestUtils.Simulate.mouseEnter(
      TestUtils.findRenderedDOMComponentWithClass(
        instance,
        'cf-notifications__item'
      )
    );

    delay(150, () => {
      expect(called).toBeFalsy();
      TestUtils.Simulate.mouseLeave(
        TestUtils.findRenderedDOMComponentWithClass(
          instance,
          'cf-notifications__item'
        )
      );

      delay(150, () => {
        expect(called).toBeTruthy();
        done();
      });
    });
  });
});

test('should close on click', done => {
  let called = false;
  let onClose = () => called = true;

  let instance = render(
    <Notification type="info" message="Baz" delay={100} onClose={onClose} />,
    global.root
  );

  delay(50, () => {
    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithClass(
        instance,
        'cf-notifications__item_close'
      )
    );
    expect(called).toBeTruthy();
    done();
  });
});

test('should not render a close button when closable is false', () => {
  let instance = render(
    <Notification
      type="info"
      message="Baz"
      closable={false}
      onClose={() => {}}
    />,
    global.root
  );

  let found = TestUtils.scryRenderedDOMComponentsWithClass(
    instance,
    'cf-notifications__item_close'
  );

  expect(found.length).toBe(0);
});

test('should not render a progress when persist is true', () => {
  let instance = render(
    <Notification
      type="info"
      message="Baz"
      persist={true}
      onClose={() => {}}
    />,
    global.root
  );

  let found = TestUtils.scryRenderedDOMComponentsWithClass(
    instance,
    'cf-notifications__item_progress'
  );

  expect(found.length).toBe(0);
});
