import React from 'react';
import renderer from 'react-test-renderer';
import { FormLabel } from '../../cf-component-form/src/index';

test('should render', () => {
  const component = renderer.create(<FormLabel>FormLabel</FormLabel>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render hidden', function() {
  const component = renderer.create(<FormLabel hidden>FormLabel</FormLabel>);
  expect(component.toJSON()).toMatchSnapshot();
});
