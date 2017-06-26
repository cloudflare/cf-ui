import React from 'react';
import felaSnapshot from 'cf-style-provider/src/felaSnapshot';
import { Label } from '../../cf-component-label/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(<Label type="default">A Label</Label>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
