import React from 'react';
import { Heading, HeadingTheme } from '../../cf-component-heading/src/index';
import renderer from 'react-test-renderer';
import felaTestContext from '../../../felaTestContext';
import { applyTheme } from 'cf-style-container';

const StyledHeading = applyTheme(Heading, HeadingTheme);

test('should render size', () => {
  const component = renderer.create(
    felaTestContext(<StyledHeading size={2}>Heading</StyledHeading>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});
