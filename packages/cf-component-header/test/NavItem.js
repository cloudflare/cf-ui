import React from 'react';
import renderer from 'react-test-renderer';
import NavItem from '../src/NavItem';
import { felaSnapshot } from 'cf-style-provider';

test('should render', () => {
  const snapshot = felaSnapshot(<NavItem />);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
