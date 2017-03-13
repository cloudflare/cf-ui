import React from 'react';
import renderer from 'react-test-renderer';
import { CardLoadingText } from 'cf-component-card';

test('should render', () => {
  const component = renderer.create(<CardLoadingText />);
  expect(component.toJSON()).toMatchSnapshot();
});
