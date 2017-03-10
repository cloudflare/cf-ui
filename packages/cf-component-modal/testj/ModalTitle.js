import React from 'react';
import renderer from 'react-test-renderer';
import { ModalTitle } from 'cf-component-modal';
import { Heading } from 'cf-component-heading';

test('should render', () => {
  const component = renderer.create(<ModalTitle>ModalTitle</ModalTitle>);
  expect(component.toJSON()).toMatchSnapshot();
});
