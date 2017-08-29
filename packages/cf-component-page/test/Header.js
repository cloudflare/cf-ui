import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../src/Header';
import { felaSnapshot } from 'cf-style-provider';

test('should render', () => {
  const snapshot = felaSnapshot(<Header>Hello World</Header>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render sticky', () => {
  const snapshot = felaSnapshot(<Header sticky>Hello World</Header>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
