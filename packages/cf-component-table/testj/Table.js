import React from 'react';
import renderer from 'react-test-renderer';
import { Table } from 'cf-component-table';

test('should render', () => {
  const component = renderer.create(<Table>Table</Table>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render extra class names', () => {
  const component = renderer.create(<Table className="extra">Table</Table>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render striped', () => {
  const component = renderer.create(<Table striped>Table</Table>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render hover', () => {
  const component = renderer.create(<Table hover>Table</Table>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render not bordered', () => {
  const component = renderer.create(<Table bordered={false}>Table</Table>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render condensed', () => {
  const component = renderer.create(<Table condensed>Table</Table>);
  expect(component.toJSON()).toMatchSnapshot();
});
