import React from 'react';
import renderer from 'react-test-renderer';
import { FormHeader } from '../../cf-component-form/src/index';

test('should render', () => {
  const component = renderer.create(<FormHeader title="FormHeader" />);
  expect(component.toJSON()).toMatchSnapshot();
});
