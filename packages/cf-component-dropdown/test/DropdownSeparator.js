import React from 'react';
import renderer from 'react-test-renderer';
import { DropdownSeparator } from '../../cf-component-dropdown/src/index';

test('should render with to', () => {
  const component = renderer.create(<DropdownSeparator />);
  expect(component.toJSON()).toMatchSnapshot();
});
