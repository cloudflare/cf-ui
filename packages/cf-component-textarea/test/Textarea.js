import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { Textarea } from '../../cf-component-textarea/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(
    <Textarea name="example" value="content" onChange={() => {}} />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
