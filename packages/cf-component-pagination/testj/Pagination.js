import React from 'react';
import renderer from 'react-test-renderer';
import { Pagination } from 'cf-component-pagination';

describe('Pagination', function() {
  test('should render', function() {
    const component = renderer.create(<Pagination>Pagination</Pagination>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render with info', function() {
    const component = renderer.create(
      <Pagination info="Pagination Info">Pagination</Pagination>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
