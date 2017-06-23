import React from 'react';
import { HeadingCaption } from '../../cf-component-heading/src/index';
import renderer from 'react-test-renderer';
import { felaTestContext } from 'cf-style-provider';

test('should render', () => {
  const component = renderer.create(
    felaTestContext(<HeadingCaption>Heading Caption</HeadingCaption>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});
