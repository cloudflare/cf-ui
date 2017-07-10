import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { Dropdown, DropdownLink } from '../../cf-component-dropdown/src/index';

test('should render with to', () => {
  const snapshot = felaSnapshot(
    <Dropdown onClose={() => {}}>
      <DropdownLink to="/foo">Route to /foo</DropdownLink>
    </Dropdown>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with onClick', () => {
  const snapshot = felaSnapshot(
    <Dropdown onClose={() => {}}>
      <DropdownLink onClick={() => {}}>onClick handler</DropdownLink>
    </Dropdown>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
