import React from 'react';
import renderer from 'react-test-renderer';
import { ModalClose } from 'cf-component-modal';
import Icon from 'cf-component-icon';

test('should render', () => {
  const component = renderer.create(<ModalClose onClick={() => {}} />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with a label', () => {
  const component = renderer.create(
    <ModalClose label="label" onClick={() => {}} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
