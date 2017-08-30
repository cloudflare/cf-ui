import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { Toast } from '../../cf-component-toast/src/index';

test('should render success', () => {
  const snapshot = felaSnapshot(<Toast type="success">Success</Toast>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render error', () => {
  const snapshot = felaSnapshot(<Toast type="error">Error</Toast>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render info', () => {
  const snapshot = felaSnapshot(<Toast type="info">Info</Toast>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
