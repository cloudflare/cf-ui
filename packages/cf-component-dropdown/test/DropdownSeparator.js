import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { DropdownSeparator } from '../../cf-component-dropdown/src/index';

test('should render with to', () => {
  const snapshot = felaSnapshot(<DropdownSeparator />);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
