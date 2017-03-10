import React from 'react';
import renderer from 'react-test-renderer';
import { Radio } from 'cf-component-radio';

test('should render', () => {
  const component = renderer.create(
    <Radio
      label="Option 1"
      name="radio-option-1"
      value="option1"
      checked={false}
      onChange={() => {}}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render checked', () => {
  const component = renderer.create(
    <Radio
      label="Option 1"
      name="radio-option-1"
      value="option1"
      checked={true}
      onChange={() => {}}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render without a label', () => {
  const component = renderer.create(
    <Radio
      label={false}
      name="radio-option-1"
      value="option1"
      checked={false}
      onChange={() => {}}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
