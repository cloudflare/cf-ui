import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { OrderedList } from '../../cf-component-list/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(<OrderedList>List</OrderedList>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
