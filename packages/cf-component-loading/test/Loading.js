import React from 'react';
import renderer from 'react-test-renderer';
import Loading from 'cf-component-loading';
import felaTestContext from '../../../felaTestContext';

test('should render', () => {
  const component = renderer.create(felaTestContext(<Loading />));
  expect(component.toJSON()).toMatchSnapshot();
});
