import React from 'react';
import renderer from 'react-test-renderer';
import Text from 'cf-component-text';
import felaTestContext from '../../../styleguide/felaTestContext';
import { applyTheme } from 'cf-style-container';

test('should render size', () => {
  const StyledText = applyTheme(Text, () => ({
    'fontSize--normal': '1rem',
    'fontWeight--normal': 400
  }));

  const component = renderer.create(
    felaTestContext(<StyledText size="normal">Hello</StyledText>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render align', () => {
  const StyledText = applyTheme(Text, () => ({
    'textAlign--center': 'center'
  }));

  const component = renderer.create(
    felaTestContext(<StyledText align="center">Hello</StyledText>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render type', () => {
  const StyledText = applyTheme(Text, () => ({
    'colorType--info': '#434148'
  }));

  const component = renderer.create(
    felaTestContext(<StyledText type="info">Hello</StyledText>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render case', () => {
  const StyledText = applyTheme(Text, () => ({
    'textTransform--lowercase': 'lowercase'
  }));

  const component = renderer.create(
    felaTestContext(<StyledText case="lowercase">Hello</StyledText>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});
