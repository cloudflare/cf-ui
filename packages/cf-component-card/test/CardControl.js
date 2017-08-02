import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { CardControl } from '../../cf-component-card/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(<CardControl>CardControl</CardControl>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
test('should render wide', () => {
  const snapshot = felaSnapshot(<CardControl wide>CardControl</CardControl>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
