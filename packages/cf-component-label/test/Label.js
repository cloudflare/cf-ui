import React from 'react';
import renderer from 'react-test-renderer';
import { felaTestContext } from 'cf-style-provider';
import { Label } from '../../cf-component-label/src/index';

test('should render', () => {
  const component = renderer.create(
    felaTestContext(<Label type="default">A Label</Label>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});
