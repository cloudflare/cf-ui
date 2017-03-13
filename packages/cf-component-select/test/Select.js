import React from 'react';
import renderer from 'react-test-renderer';
import Select from 'cf-component-select';

test('should render', () => {
  const component = renderer.create(<Select />);
  expect(component.toJSON()).toMatchSnapshot();
});
