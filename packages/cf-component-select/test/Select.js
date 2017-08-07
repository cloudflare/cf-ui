import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { Select } from '../../cf-component-select/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(<Select />);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
