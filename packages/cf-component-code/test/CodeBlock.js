import React from 'react';
import { felaSnapshot } from 'cf-style-provider';

import { CodeBlock } from '../../cf-component-code/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(<CodeBlock>Hello</CodeBlock>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
