import React from 'react';
import { Heading } from '../../cf-component-heading/src/index';
import renderer from 'react-test-renderer';
import felaTestContext from '../../../felaTestContext';

test('should render size', () => {
  const component = renderer.create(
    felaTestContext(<Heading size={2}>Heading</Heading>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});
