import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { CardSection } from '../../cf-component-card/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(<CardSection>CardSection</CardSection>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with status', () => {
  const snapshot = felaSnapshot(
    <CardSection status="error">CardSection</CardSection>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
