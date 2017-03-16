import React from 'react';
import renderer from 'react-test-renderer';
import { FormFieldset } from '../../cf-component-form/src/index';

test('should render', () => {
  const component = renderer.create(
    <FormFieldset legend="Legend">FormFieldset</FormFieldset>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
