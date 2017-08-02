import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { CardContent } from '../../cf-component-card/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(<CardContent>CardContent</CardContent>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
