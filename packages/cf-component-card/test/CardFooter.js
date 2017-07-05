import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { CardFooter } from '../../cf-component-card/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(<CardFooter>Card footer</CardFooter>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
