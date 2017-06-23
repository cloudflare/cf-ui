import React from 'react';
import { Text, TextUnstyled } from '../../cf-component-text/src/index';
import { felaSnapshot } from 'cf-style-provider';
import { applyTheme } from 'cf-style-container';

test('should render normal size', () => {
  const Text = applyTheme(TextUnstyled, () => ({
    fontSizeNormal: '1rem',
    fontWeightNormal: 400
  }));
  const snapshot = felaSnapshot(<Text size="normal">Hello</Text>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render small size', () => {
  const Text = applyTheme(TextUnstyled, () => ({
    fontSizeSmall: '0.8em',
    lineHeightSmall: 1.3
  }));

  const snapshot = felaSnapshot(<Text size="small">Hello</Text>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render bold size', () => {
  const Text = applyTheme(TextUnstyled, () => ({
    fontSizeNormal: '1rem',
    fontWeightBold: 700
  }));

  const snapshot = felaSnapshot(<Text size="normal" weight="bold">Hello</Text>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render semi-bold size', () => {
  const Text = applyTheme(TextUnstyled, () => ({
    fontSizeNormal: '1rem',
    fontWeightSemiBold: 600
  }));

  const snapshot = felaSnapshot(
    <Text size="normal" weight="semi-bold">Hello</Text>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render align', () => {
  const Text = applyTheme(TextUnstyled, () => ({
    textAlignCenter: 'center'
  }));

  const snapshot = felaSnapshot(<Text align="center">Hello</Text>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render type', () => {
  const Text = applyTheme(TextUnstyled, () => ({
    colorInfo: '#434148'
  }));

  const snapshot = felaSnapshot(<Text type="info">Hello</Text>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render lowercase', () => {
  const Text = applyTheme(TextUnstyled, () => ({
    textTransformLowercase: 'lowercase'
  }));

  const snapshot = felaSnapshot(<Text case="lowercase">Hello</Text>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render titlecase case', () => {
  const Text = applyTheme(TextUnstyled, () => ({
    'textTransformTitlecase:first-letter': 'capitalize'
  }));

  const snapshot = felaSnapshot(<Text case="titlecase">Hello</Text>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
