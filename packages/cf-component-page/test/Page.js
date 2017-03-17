import React from 'react';
import renderer from 'react-test-renderer';
import felaTestContext from '../../../styleguide/felaTestContext';
import { applyTheme } from 'cf-style-container';
import { Page as PageUnstyled, PageTheme } from 'cf-component-page';

const Page = applyTheme(PageUnstyled, PageTheme);
test('should render', () => {
  const component = renderer.create(felaTestContext(<Page>Hello World</Page>));
  expect(component.toJSON()).toMatchSnapshot();
});
