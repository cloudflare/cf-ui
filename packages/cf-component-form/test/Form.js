import React from 'react';
import renderer from 'react-test-renderer';
import { Form } from '../src/index';
import { felaTestContext } from 'cf-style-provider';

test('should render horizontal layout', () => {
  const component = renderer.create(
    felaTestContext(
      <Form layout="horizontal" onSubmit={() => console.log('submit')}>
        Form
      </Form>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render vertical layout', () => {
  const component = renderer.create(
    felaTestContext(
      <Form layout="vertical" onSubmit={() => console.log('submit')}>Form</Form>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});
