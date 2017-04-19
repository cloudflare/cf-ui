import React from 'react';
import renderer from 'react-test-renderer';
import { FormFieldset } from '../src/index';
import felaTestContext from '../../../felaTestContext';

test('should render', () => {
  const component = renderer.create(
    felaTestContext(
      <FormFieldset legend="Legend" layout="horizontal">
        FormFieldset
      </FormFieldset>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});
