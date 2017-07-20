import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { UnorderedList } from '../../cf-component-list/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(<UnorderedList>List</UnorderedList>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
