import React from 'react';
import { felaSnapshot } from 'cf-style-provider';

import { CheckboxGroup } from '../../cf-component-checkbox/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(
    <CheckboxGroup
      values={['option1']}
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
