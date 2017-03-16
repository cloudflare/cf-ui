import React from 'react';
import renderer from 'react-test-renderer';
import { FormFooter } from '../../cf-component-form/src/index';

test('should render', () => {
  const component = renderer.create(<FormFooter>FormFooter</FormFooter>);
  expect(component.toJSON()).toMatchSnapshot();
});
