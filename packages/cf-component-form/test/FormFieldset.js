import React from 'react';
import { FormFieldset } from '../src/index';
import { felaSnapshot } from 'cf-style-provider';

test('should render', () => {
  const snapshot = felaSnapshot(
    <FormFieldset legend="Legend" layout="horizontal">
      FormFieldset
    </FormFieldset>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
