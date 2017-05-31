import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import CardToolbar from '../../cf-component-card/src/CardToolbar';

test('should render', () => {
  const snapshot = felaSnapshot(
    <CardToolbar controls={'Controls'} links={'Links'} />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
