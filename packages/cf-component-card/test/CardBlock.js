import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { CardBlock } from '../../cf-component-card/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(<CardBlock>CardBlock</CardBlock>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
