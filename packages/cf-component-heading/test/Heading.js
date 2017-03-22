import React from 'react';
import {
  Heading as HeadingUnstyled,
  HeadingTheme
} from '../../cf-component-heading/src/index';
import renderer from 'react-test-renderer';
import felaTestContext from '../../../felaTestContext';
import { applyTheme } from 'cf-style-container';

const Heading = applyTheme(HeadingUnstyled, HeadingTheme);

test('should render size', () => {
  const component = renderer.create(
    felaTestContext(<Heading size={2}>Heading</Heading>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});
