import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { CardTitle } from '../../cf-component-card/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(<CardTitle>CardTitle</CardTitle>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
