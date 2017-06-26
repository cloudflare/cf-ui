import React from 'react';
import renderer from 'react-test-renderer';
import { PageHeader } from '../src/index';
import felaSnapshot from 'cf-style-provider/src/felaSnapshot';

test('should render title', () => {
  const snapshot = felaSnapshot(<PageHeader title="Title" />);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render title/subtitle', () => {
  const snapshot = felaSnapshot(
    <PageHeader title="Title" subtitle="Subtitle" />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
