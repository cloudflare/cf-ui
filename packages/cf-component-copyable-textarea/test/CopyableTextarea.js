import React from 'react';
import jsdom from 'jsdom';
import { mount } from 'enzyme';
import { felaSnapshot, felaTestContext } from 'cf-style-provider';
import {
  CopyableTextarea
} from '../../cf-component-copyable-textarea/src/index';

beforeEach(() => {
  const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
  global.document = doc;
  global.window = doc.defaultView;
  global.document.execCommand = () => true;
});

test('should render', () => {
  const snapshot = felaSnapshot(
    <CopyableTextarea
      name="example"
      value="content"
      clickToCopyText="click here"
      copiedTextToClipboardText="copied"
      pressCommandOrCtrlCToCopyText="press here"
    />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should call onCopy on focus', () => {
  let clicked = false;
  const copyableTextarea = mount(
    felaTestContext(
      <CopyableTextarea
        name="example"
        value="content"
        onCopy={() => clicked = true}
      />
    )
  );
  copyableTextarea.find('textarea').simulate('focus');
  expect(clicked).toBeTruthy();
});

test('should render copied help text after copying', () => {
  const copyableTextarea = mount(
    felaTestContext(
      <CopyableTextarea
        name="example"
        value="content"
        copiedTextToClipboardText="copied"
      />
    )
  );
  copyableTextarea.find('textarea').simulate('focus');
  expect(copyableTextarea.find('p').text()).toBe('copied');
});

test('should render press help text if copying was not successful', () => {
  global.document.execCommand = () => {
    throw new Error('error');
  };
  const copyableTextarea = mount(
    felaTestContext(
      <CopyableTextarea
        name="example"
        value="content"
        pressCommandOrCtrlCToCopyText="press here"
      />
    )
  );
  copyableTextarea.find('textarea').simulate('focus');
  expect(copyableTextarea.find('p').text()).toBe('press here');
});
