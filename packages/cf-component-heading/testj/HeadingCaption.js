import React from 'react';
import { HeadingCaption } from 'cf-component-heading';
import renderer from 'react-test-renderer';

test('should render', () => {
  const component = renderer.create(
    <HeadingCaption>Heading Caption</HeadingCaption>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
