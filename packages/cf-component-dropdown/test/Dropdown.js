import React from 'react';
import renderer from 'react-test-renderer';
import { render, unmountComponentAtNode } from 'react-dom';
import { felaSnapshot, felaTestContext } from 'cf-style-provider';
import jsdom from 'jsdom';
import { mount } from 'enzyme';

import { Dropdown, DropdownLink } from '../../cf-component-dropdown/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(
    <Dropdown onClose={() => {}}>
      Dropdown
    </Dropdown>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with align', () => {
  const snapshot = felaSnapshot(
    <Dropdown align="right" onClose={() => {}}>
      Dropdown
    </Dropdown>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
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

    var dom = mount(felaTestContext(<Dropdown onClose={onClose} />));

    // Fela renders a Stateless component so we can't just use `.getNode()` but
    // we know that the Dropdown we want is the second element in the list.
    const instance = dom.find('Dropdown').getNodes()[1];

    instance.handleDocumentKeydown({ keyCode: 27 });
    expect(called).toBeTruthy();
  });

  test('should be able to navigate with the up and down keys', () => {
    const down = { keyCode: 40, preventDefault() {} };
    const up = { keyCode: 38, preventDefault() {} };

    const getFocusedHref = () =>
      global.document.activeElement.getAttribute('href');

    const dom = mount(
      felaTestContext(
        <Dropdown onClose={() => {}}>
          <DropdownLink to="one" />
          <DropdownLink to="two" />
          <DropdownLink to="three" />
        </Dropdown>
      )
    );
    const instance = dom.find('Dropdown').getNodes()[1];

    expect(getFocusedHref()).toBe(null);

    instance.handleDocumentKeydown(down);
    setTimeout(() => expect(getFocusedHref()).toBe('one'), 0);

    instance.handleDocumentKeydown(down);
    setTimeout(() => expect(getFocusedHref()).toBe('two'), 0);

    instance.handleDocumentKeydown(down);
    instance.handleDocumentKeydown(down);
    setTimeout(() => expect(getFocusedHref()).toBe('three'), 0);

    instance.handleDocumentKeydown(up);
    setTimeout(() => expect(getFocusedHref()).toBe('two'), 0);

    const two = global.document.activeElement;

    instance.handleDocumentKeydown(up);
    instance.handleDocumentKeydown(up);
    setTimeout(() => expect(getFocusedHref()).toBe('one'), 0);

    two.focus();
    instance.handleDocumentKeydown(down);
    setTimeout(() => expect(getFocusedHref()).toBe('three'), 0);
  });
});
