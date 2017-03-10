import React from 'react';
import renderer from 'react-test-renderer';
import Toggle from 'cf-component-toggle';

test('should render', () => {
  const component = renderer.create(<Toggle label="Test Toggle" name="test" />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render checked', () => {
  const component = renderer.create(
    <Toggle label="Test Toggle" name="test" value={true} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render disabled', () => {
  const component = renderer.create(
    <Toggle disabled label="Test Toggle" name="test" value={true} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
