import React from 'react';
import { FormHeader } from '../src/index';
import { felaSnapshot } from 'cf-style-provider';

test('should render', () => {
  const snapshot = felaSnapshot(<FormHeader title="FormHeader" />);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
