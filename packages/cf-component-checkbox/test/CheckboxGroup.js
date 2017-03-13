import React from 'react';
import renderer from 'react-test-renderer';
import { CheckboxGroup } from 'cf-component-checkbox';

test('should render', () => {
  const component = renderer.create(
    <CheckboxGroup
      values={['option1']}
      onChange={() => {}}
      options={[
        { label: 'Option 1', name: 'group-option-1', value: 'option1' },
        { label: 'Option 2', name: 'group-option-2', value: 'option2' }
      ]}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
