import React from 'react';
import renderer from 'react-test-renderer';
import { Dropdown, DropdownLink } from 'cf-component-dropdown';

test('should render with to', () => {
  const component = renderer.create(
    <Dropdown onClose={() => {}}>
      <DropdownLink to="/foo">Route to /foo</DropdownLink>
    </Dropdown>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with onClick', () => {
  const component = renderer.create(
    <Dropdown onClose={() => {}}>
      <DropdownLink onClick={() => {}}>onClick handler</DropdownLink>
    </Dropdown>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
