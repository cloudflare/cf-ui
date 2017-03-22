import React from 'react';
import {
  HeadingCaption as HeadingCaptionUnstyled,
  HeadingCaptionTheme
} from '../../cf-component-heading/src/index';
import renderer from 'react-test-renderer';
import felaTestContext from '../../../felaTestContext';
import { applyTheme } from 'cf-style-container';

const HeadingCaption = applyTheme(HeadingCaptionUnstyled, HeadingCaptionTheme);

test('should render', () => {
  const component = renderer.create(
    felaTestContext(<HeadingCaption>Heading Caption</HeadingCaption>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});
