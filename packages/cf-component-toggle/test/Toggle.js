import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import Toggle from '../../cf-component-toggle/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(<Toggle label="Test Toggle" name="test" />);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render checked', () => {
  const snapshot = felaSnapshot(
    <Toggle label="Test Toggle" name="test" value={true} />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render disabled', () => {
  const snapshot = felaSnapshot(
    <Toggle disabled label="Test Toggle" name="test" value={true} />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
