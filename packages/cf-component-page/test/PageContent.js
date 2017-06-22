import React from 'react';
import renderer from 'react-test-renderer';
import { PageContent } from '../../cf-component-page/src/index';
import felaTestContext from '../../../felaTestContext';

test('should render', () => {
  const component = renderer.create(
    felaTestContext(<PageContent>Hello World</PageContent>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});
