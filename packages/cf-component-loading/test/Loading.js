import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { Loading } from '../../cf-component-loading/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(<Loading />);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
