import React from 'react';
import renderer from 'react-test-renderer';
import { FormHeader } from '../src/index';
import felaTestContext from '../../../felaTestContext';

test('should render', () => {
  const component = renderer.create(
    felaTestContext(<FormHeader title="FormHeader" />)
  );
  expect(component.toJSON()).toMatchSnapshot();
});
