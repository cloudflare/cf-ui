import React from 'react';
import renderer from 'react-test-renderer';
import { FormLabel } from '../src/index';
import felaTestContext from '../../../felaTestContext';

test('should render', () => {
  const component = renderer.create(
    felaTestContext(<FormLabel>FormLabel</FormLabel>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render hidden', function() {
  const component = renderer.create(
    felaTestContext(<FormLabel hidden>FormLabel</FormLabel>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});
