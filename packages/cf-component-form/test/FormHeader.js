import React from 'react';
import renderer from 'react-test-renderer';
import { FormHeader } from '../src/index';
import { felaTestContext } from 'cf-style-provider';

test('should render', () => {
  const component = renderer.create(
    felaTestContext(<FormHeader title="FormHeader" />)
  );
  expect(component.toJSON()).toMatchSnapshot();
});
