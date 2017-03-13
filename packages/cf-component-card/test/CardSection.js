import React from 'react';
import renderer from 'react-test-renderer';
import { CardSection } from 'cf-component-card';

test('should render', () => {
  const component = renderer.create(<CardSection>CardSection</CardSection>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with status', () => {
  const component = renderer.create(
    <CardSection status="error">CardSection</CardSection>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
