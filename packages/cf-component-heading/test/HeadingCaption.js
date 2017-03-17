import React from 'react';
import { HeadingCaption, HeadingCaptionTheme } from 'cf-component-heading';
import renderer from 'react-test-renderer';
import felaTestContext from '../../../styleguide/felaTestContext';
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
