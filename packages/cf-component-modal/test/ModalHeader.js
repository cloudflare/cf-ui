import React from 'react';
import renderer from 'react-test-renderer';
import { ModalHeader } from 'cf-component-modal';

test('should render', () => {
  const component = renderer.create(<ModalHeader>ModalHeader</ModalHeader>);
  expect(component.toJSON()).toMatchSnapshot();
});
