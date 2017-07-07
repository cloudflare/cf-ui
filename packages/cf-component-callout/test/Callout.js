import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { Callout } from '../../cf-component-callout/src/index';

test('should render "default" by default', () => {
  const snapshot = felaSnapshot(<Callout title="Hello" content="World" />);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render "type"', () => {
  const snapshot = felaSnapshot(
    <Callout type="info" title="Hello" content="World" />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
