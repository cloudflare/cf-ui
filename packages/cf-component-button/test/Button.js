import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { Button } from '../../cf-component-button/src/index';

test('should render with type', () => {
  const snapshot = felaSnapshot(
    <Button type="primary" onClick={() => {}}>Button</Button>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with type/disabled', () => {
  const snapshot = felaSnapshot(
    <Button type="primary" disabled onClick={() => {}}>Button</Button>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render as submit', () => {
  const snapshot = felaSnapshot(
    <Button type="primary" submit onClick={() => {}}>Button</Button>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with loading', () => {
  const snapshot = felaSnapshot(
    <Button type="primary" loading onClick={() => {}}>Button</Button>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with loading and disabled overridden', () => {
  const snapshot = felaSnapshot(
    <Button type="primary" loading disabled={false} onClick={() => {}}>
      Button
    </Button>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
