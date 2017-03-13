import React from 'react';
import renderer from 'react-test-renderer';
import { Form } from 'cf-component-form';

test('should render horizontal layout', () => {
  const component = renderer.create(
    <Form layout="horizontal" onSubmit={() => console.log('submit')}>Form</Form>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render vertical layout', () => {
  const component = renderer.create(
    <Form layout="vertical" onSubmit={() => console.log('submit')}>Form</Form>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
