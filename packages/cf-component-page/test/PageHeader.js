import React from 'react';
import renderer from 'react-test-renderer';
import { PageHeader } from 'cf-component-page';

test('should render title', () => {
  const component = renderer.create(<PageHeader title="Title" />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render title/subtitle', () => {
  const component = renderer.create(
    <PageHeader title="Title" subtitle="Subtitle" />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
