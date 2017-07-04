import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { Card } from '../../cf-component-card/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(<Card>Card</Card>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
