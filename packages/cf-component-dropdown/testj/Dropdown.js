import React from 'react';
import renderer from 'react-test-renderer';
import { trackFocus, getCurrentFocus } from 'cf-test-focus';
import { render, unmountComponentAtNode } from 'react-dom';
import { Dropdown, DropdownLink } from 'cf-component-dropdown';
import jsdom from 'jsdom';

test('should render', () => {
  const component = renderer.create(
    <Dropdown onClose={() => {}}>
      Dropdown
    </Dropdown>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with align', () => {
  const component = renderer.create(
    <Dropdown align="right" onClose={() => {}}>
      Dropdown
    </Dropdown>
  );
});

describe('interactions', () => {
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
    delete global.root;
  });

  test('should call `onClose` when the `esc` key is pressed', () => {
    var called = false;
    var onClose = function() {
      called = true;
    };

    var dom = <Dropdown onClose={onClose} />;
    var instance = render(dom, global.root);

    instance.handleDocumentKeydown({ keyCode: 27 });
    expect(called).toBeTruthy();
  });

  test('should be able to navigate with the up and down keys', () => {
    trackFocus();

    const down = { keyCode: 40, preventDefault() {} };
    const up = { keyCode: 38, preventDefault() {} };

    const getFocusedHref = () => getCurrentFocus().getAttribute('href');

    const dom = (
      <Dropdown onClose={() => {}}>
        <DropdownLink to="one" />
        <DropdownLink to="two" />
        <DropdownLink to="three" />
      </Dropdown>
    );
    const instance = render(dom, global.root);

    instance.handleDocumentKeydown(down);
    expect(getFocusedHref()).toBe('one');

    instance.handleDocumentKeydown(down);
    expect(getFocusedHref()).toBe('two');

    instance.handleDocumentKeydown(down);
    instance.handleDocumentKeydown(down);
    expect(getFocusedHref()).toBe('three');

    instance.handleDocumentKeydown(up);
    expect(getFocusedHref()).toBe('two');

    const two = getCurrentFocus();

    instance.handleDocumentKeydown(up);
    instance.handleDocumentKeydown(up);
    expect(getFocusedHref()).toBe('one');

    two.focus();
    instance.handleDocumentKeydown(down);
    expect(getFocusedHref()).toBe('three');
  });
});
