import React from 'react';
import renderer from 'react-test-renderer';
import { TableFoot } from '../../cf-component-table/src/index';

test('should render', () => {
  const component = renderer.create(<TableFoot>TableFoot</TableFoot>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render extra class name', () => {
  const component = renderer.create(
    <TableFoot className="extra">TableFoot</TableFoot>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
