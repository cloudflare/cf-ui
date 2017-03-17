import React from 'react';
import renderer from 'react-test-renderer';
import { LayoutRow } from '../../cf-component-layout/src/index';

test('should render', () => {
  const component = renderer.create(<LayoutRow />);
  expect(component.toJSON()).toMatchSnapshot();
});
