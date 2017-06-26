import React from 'react';
import renderer from 'react-test-renderer';
import { PageContent } from '../src/index';
import felaSnapshot from 'cf-style-provider/src/felaSnapshot';

test('should render', () => {
  const snapshot = felaSnapshot(<PageContent>Hello World</PageContent>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
