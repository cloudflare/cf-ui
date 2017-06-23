import React from 'react';
import renderer from 'react-test-renderer';
import { FormFooter } from '../src/index';
import { felaTestContext } from 'cf-style-provider';

test('should render', () => {
  const component = renderer.create(
    felaTestContext(<FormFooter>FormFooter</FormFooter>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});
