import React from 'react';
import renderer from 'react-test-renderer';
import { Page } from '../src/index';
import felaSnapshot from 'cf-style-provider/src/felaSnapshot';

test('should render', () => {
  const snapshot = felaSnapshot(<Page>Hello World</Page>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
