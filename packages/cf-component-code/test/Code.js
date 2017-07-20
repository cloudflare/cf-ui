import React from 'react';
import { felaSnapshot } from 'cf-style-provider';

import { Code } from '../../cf-component-code/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(<Code>Hello</Code>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
