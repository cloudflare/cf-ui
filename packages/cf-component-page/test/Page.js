import React from 'react';
import renderer from 'react-test-renderer';
import { Page } from '../../cf-component-page/src/index';
import felaTestContext from '../../../felaTestContext';

test('should render', () => {
  const component = renderer.create(felaTestContext(<Page>Hello World</Page>));
  expect(component.toJSON()).toMatchSnapshot();
});
