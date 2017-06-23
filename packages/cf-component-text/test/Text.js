import React from 'react';
import renderer from 'react-test-renderer';
import { Text, TextUnstyled } from '../../cf-component-text/src/index';
import { felaTestContext } from 'cf-style-provider';
import { applyTheme } from 'cf-style-container';

test('should render normal size', () => {
  const Text = applyTheme(TextUnstyled, () => ({
    fontSizeNormal: '1rem',
    fontWeightNormal: 400
  }));

  const component = renderer.create(
    felaTestContext(<Text size="normal">Hello</Text>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render small size', () => {
  const Text = applyTheme(TextUnstyled, () => ({
    fontSizeSmall: '0.8em',
    lineHeightSmall: 1.3
  }));

  const component = renderer.create(
    felaTestContext(<Text size="small">Hello</Text>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render bold size', () => {
  const Text = applyTheme(TextUnstyled, () => ({
    fontSizeNormal: '1rem',
    fontWeightBold: 700
  }));

  const component = renderer.create(
    felaTestContext(<Text size="normal" weight="bold">Hello</Text>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render semi-bold size', () => {
  const Text = applyTheme(TextUnstyled, () => ({
    fontSizeNormal: '1rem',
    fontWeightSemiBold: 600
  }));

  const component = renderer.create(
    felaTestContext(<Text size="normal" weight="semi-bold">Hello</Text>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render align', () => {
  const Text = applyTheme(TextUnstyled, () => ({
    textAlignCenter: 'center'
  }));

  const component = renderer.create(
    felaTestContext(<Text align="center">Hello</Text>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render type', () => {
  const Text = applyTheme(TextUnstyled, () => ({
    colorInfo: '#434148'
  }));

  const component = renderer.create(
    felaTestContext(<Text type="info">Hello</Text>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render lowercase', () => {
  const Text = applyTheme(TextUnstyled, () => ({
    textTransformLowercase: 'lowercase'
  }));

  const component = renderer.create(
    felaTestContext(<Text case="lowercase">Hello</Text>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render titlecase case', () => {
  const Text = applyTheme(TextUnstyled, () => ({
    'textTransformTitlecase:first-letter': 'capitalize'
  }));

  const component = renderer.create(
    felaTestContext(<Text case="titlecase">Hello</Text>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});
