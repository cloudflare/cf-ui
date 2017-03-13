import React from 'react';
import renderer from 'react-test-renderer';
import { ModalActions } from 'cf-component-modal';

test('should render', () => {
  const component = renderer.create(<ModalActions>ModalActions</ModalActions>);
  expect(component.toJSON()).toMatchSnapshot();
});
