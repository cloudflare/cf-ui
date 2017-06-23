import React from 'react';
import { Form } from '../src/index';
import { felaSnapshot } from 'cf-style-provider';

test('should render horizontal layout', () => {
  const snapshot = felaSnapshot(
    <Form layout="horizontal" onSubmit={() => console.log('submit')}>
      Form
    </Form>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render vertical layout', () => {
  const snapshot = felaSnapshot(
    <Form layout="vertical" onSubmit={() => console.log('submit')}>Form</Form>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
