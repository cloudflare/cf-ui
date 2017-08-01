import React from 'react';
import { felaSnapshot } from 'cf-style-provider';

import { RadioGroup } from '../../cf-component-radio/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(
    <RadioGroup
      value="option1"
      onChange={() => {}}
      options={[
        { label: 'Option 1', name: 'group-option-1', value: 'option1' },
        { label: 'Option 2', name: 'group-option-2', value: 'option2' }
      ]}
    />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
