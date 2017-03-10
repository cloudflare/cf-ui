import React from 'react';
import renderer from 'react-test-renderer';
import { Page } from 'cf-component-page';

test('should render', () => {
  const component = renderer.create(<Page>Hello World</Page>);
  expect(component.toJSON()).toMatchSnapshot();
});
