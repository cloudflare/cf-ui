import React from 'react';
import renderer from 'react-test-renderer';
import { CardContent } from 'cf-component-card';

test('should render without footer message', () => {
  const component = renderer.create(
    <CardContent title="Title">CardContent</CardContent>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with footer message', () => {
  const component = renderer.create(
    <CardContent title="Title" footerMessage="Footer Message">
      CardContent
    </CardContent>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
