import React from 'react';
import renderer from 'react-test-renderer';
import { TableHead } from 'cf-component-table';

describe('TableHead', () => {
  it('should render', () => {
    const component = renderer.create(<TableHead>TableHead</TableHead>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render extra class name', () => {
    const component = renderer.create(
      <TableHead className="extra">TableHead</TableHead>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
