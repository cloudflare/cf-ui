import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'cf-component-text';
import felaTestContext from '../../../styleguide/felaTestContext';
import { applyTheme } from 'cf-style-container';

test('should render size', () => {
  const StyledText = applyTheme(Text, () => ({
    fontSizeNormal: '1rem',
    fontWeightNormal: 400
  }));

  const component = renderer.create(
    felaTestContext(<StyledText size="normal">Hello</StyledText>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render align', () => {
  const StyledText = applyTheme(Text, () => ({
    textAlignCenter: 'center'
  }));

  const component = renderer.create(
    felaTestContext(<StyledText align="center">Hello</StyledText>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render type', () => {
  const StyledText = applyTheme(Text, () => ({
    colorInfo: '#434148'
  }));

  const component = renderer.create(
    felaTestContext(<StyledText type="info">Hello</StyledText>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render case', () => {
  const StyledText = applyTheme(Text, () => ({
    textTransformLowercase: 'lowercase'
  }));

  const component = renderer.create(
    felaTestContext(<StyledText case="lowercase">Hello</StyledText>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});
