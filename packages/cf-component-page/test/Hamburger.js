import React from 'react';
import renderer from 'react-test-renderer';
import Hamburger from '../src/Hamburger';
import { felaSnapshot } from 'cf-style-provider';

test('should render', () => {
  const snapshot = felaSnapshot(<Hamburger />);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
