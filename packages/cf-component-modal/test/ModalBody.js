import React from 'react';
import renderer from 'react-test-renderer';
import { ModalBody } from '../../cf-component-modal/src/index';

test('should render', function() {
  const component = renderer.create(<ModalBody>ModalBody</ModalBody>);
  expect(component.toJSON()).toMatchSnapshot();
});
