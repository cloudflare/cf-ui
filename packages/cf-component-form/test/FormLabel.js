import React from 'react';
import { FormLabel } from '../src/index';
import { felaSnapshot } from 'cf-style-provider';

test('should render', () => {
  const snapshot = felaSnapshot(<FormLabel>FormLabel</FormLabel>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render hidden', function() {
  const snapshot = felaSnapshot(<FormLabel hidden>FormLabel</FormLabel>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
