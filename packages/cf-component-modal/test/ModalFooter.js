import React from 'react';
import renderer from 'react-test-renderer';
import { ModalFooter } from 'cf-component-modal';

test('should render', () => {
  const component = renderer.create(<ModalFooter>ModalFooter</ModalFooter>);
  expect(component.toJSON()).toMatchSnapshot();
});
