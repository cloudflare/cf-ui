import React from 'react';
import renderer from 'react-test-renderer';
import { TableFoot } from 'cf-component-table';

describe('TableFoot', function() {
  test('should render', function() {
    const component = renderer.create(<TableFoot>TableFoot</TableFoot>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render extra class name', function() {
    const component = renderer.create(
      <TableFoot className="extra">TableFoot</TableFoot>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
