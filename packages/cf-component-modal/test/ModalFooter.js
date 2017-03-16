import React from 'react';
import renderer from 'react-test-renderer';
import { ModalFooter } from '../../cf-component-modal/src/index';

test('should render', () => {
  const component = renderer.create(<ModalFooter>ModalFooter</ModalFooter>);
  expect(component.toJSON()).toMatchSnapshot();
});
