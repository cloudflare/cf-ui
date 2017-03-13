import React from 'react';
import renderer from 'react-test-renderer';
import Text from 'cf-component-text';

test('should render size', () => {
  const component = renderer.create(<Text size="normal">Hello</Text>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render align', () => {
  const component = renderer.create(<Text align="center">Hello</Text>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render type', () => {
  const component = renderer.create(<Text type="info">Hello</Text>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render case', () => {
  const component = renderer.create(<Text case="uppercase">Hello</Text>);
  expect(component.toJSON()).toMatchSnapshot();
});
