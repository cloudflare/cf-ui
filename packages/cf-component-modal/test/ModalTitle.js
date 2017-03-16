import React from 'react';
import renderer from 'react-test-renderer';
import { ModalTitle } from '../../cf-component-modal/src/index';
import { Heading } from '../../cf-component-heading/src/index';
import felaTestContext from '../../../felaTestContext';

test('should render', () => {
  const component = renderer.create(
    felaTestContext(<ModalTitle>ModalTitle</ModalTitle>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});
