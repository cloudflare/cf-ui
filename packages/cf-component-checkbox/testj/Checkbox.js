import React from 'react';
import renderer from 'react-test-renderer';
import { Checkbox } from 'cf-component-checkbox';
import { shallow } from 'enzyme';

test('should handle onChange', () => {
  let called = false;
  const wrapper = shallow(
    <Checkbox
      label="Option 1"
      name="checkbox-option-1"
      value="option1"
      checked={false}
      onChange={() => called = true}
    />
  );
  wrapper.find('input').simulate('change');
  expect(called).toBeTruthy();
});

test('should render', () => {
  const component = renderer.create(
    <Checkbox
      label="Option 1"
      name="checkbox-option-1"
      value="option1"
      checked={false}
      onChange={() => {}}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render checked', () => {
  const component = renderer.create(
    <Checkbox
      label="Option 1"
      name="checkbox-option-1"
      value="option1"
      checked={true}
      onChange={() => {}}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render without a label', () => {
  const component = renderer.create(
    <Checkbox
      label={false}
      name="checkbox-option-1"
      value="option1"
      checked={false}
      onChange={() => {}}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
