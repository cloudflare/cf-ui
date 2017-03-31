import React from 'react';
import renderer from 'react-test-renderer';
import { FormFooter } from '../src/index';
import felaTestContext from '../../../felaTestContext';

test('should render', () => {
  const component = renderer.create(
    felaTestContext(<FormFooter>FormFooter</FormFooter>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});
