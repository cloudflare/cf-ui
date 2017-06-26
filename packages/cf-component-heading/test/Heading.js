import React from 'react';
import { Heading } from '../../cf-component-heading/src/index';
import felaSnapshot from 'cf-style-provider/src/felaSnapshot';

test('should render size', () => {
  const snapshot = felaSnapshot(<Heading size={2}>Heading</Heading>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
