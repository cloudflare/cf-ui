import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { Progress } from '../../cf-component-progress/src/index';
import Link from '../../cf-component-link/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(
    <Progress
      active="foo"
      onChange={() => {}}
      steps={[
        { id: 'foo', label: 'Foo', disabled: false },
        { id: 'bar', label: 'Bar', disabled: false },
        { id: 'baz', label: 'Baz', disabled: true }
      ]}
    />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
