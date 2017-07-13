import React from 'react';
import { shallow } from 'enzyme';
import { felaTestContext, felaSnapshot } from 'cf-style-provider';

import { Checkbox } from '../../cf-component-checkbox/src/index';

test('should handle onChange', () => {
  let called = false;
  const wrapper = shallow(
    felaTestContext(
      <Checkbox
        label="Option 1"
        name="checkbox-option-1"
        value="option1"
        checked={false}
        onChange={() => called = true}
      />
    )
  );
  wrapper.find('ThemedCheckboxFelaWrapper').simulate('change');
  expect(called).toBeTruthy();
});

test('should render', () => {
  const snapshot = felaSnapshot(
    <Checkbox
      label="Option 1"
      name="checkbox-option-1"
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
    <Checkbox
      label="Option 1"
      name="checkbox-option-1"
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
    <Checkbox
      label={false}
      name="checkbox-option-1"
      value="option1"
      checked={false}
      onChange={() => {}}
    />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
