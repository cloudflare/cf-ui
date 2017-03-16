import React from 'react';
import renderer from 'react-test-renderer';
import { ModalTitle } from 'cf-component-modal';
import { Heading } from 'cf-component-heading';
import felaTestContext from '../../../styleguide/felaTestContext';

test('should render', () => {
  const component = renderer.create(
    felaTestContext(<ModalTitle>ModalTitle</ModalTitle>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});
