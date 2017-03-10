import React from 'react';
import renderer from 'react-test-renderer';
import { FormFooter } from 'cf-component-form';

test('should render', () => {
  const component = renderer.create(<FormFooter>FormFooter</FormFooter>);
  expect(component.toJSON()).toMatchSnapshot();
});
