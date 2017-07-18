import React from 'react';
import { felaSnapshot } from 'cf-style-provider';

import { Radio } from '../../cf-component-radio/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(
    <Radio
      label="Option 1"
      name="radio-option-1"
      value="option1"
      checked={false}
      onChange={() => {}}
    />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render checked', () => {
  const snapshot = felaSnapshot(
    <Radio
      label="Option 1"
      name="radio-option-1"
      value="option1"
      checked={true}
      onChange={() => {}}
    />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render without a label', () => {
  const snapshot = felaSnapshot(
    <Radio
      label={false}
      name="radio-option-1"
      value="option1"
      checked={false}
      onChange={() => {}}
    />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
