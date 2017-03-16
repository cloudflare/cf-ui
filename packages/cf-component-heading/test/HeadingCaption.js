import React from 'react';
import {
  HeadingCaption,
  HeadingCaptionTheme
} from '../../cf-component-heading/src/index';
import renderer from 'react-test-renderer';
import felaTestContext from '../../../felaTestContext';
import { applyTheme } from 'cf-style-container';

const StyledHeadingCaption = applyTheme(HeadingCaption, HeadingCaptionTheme);

test('should render', () => {
  const component = renderer.create(
    felaTestContext(
      <StyledHeadingCaption>Heading Caption</StyledHeadingCaption>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});
