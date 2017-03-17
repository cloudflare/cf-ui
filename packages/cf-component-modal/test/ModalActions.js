import React from 'react';
import renderer from 'react-test-renderer';
import { ModalActions } from '../../cf-component-modal/src/index';

test('should render', () => {
  const component = renderer.create(<ModalActions>ModalActions</ModalActions>);
  expect(component.toJSON()).toMatchSnapshot();
});
