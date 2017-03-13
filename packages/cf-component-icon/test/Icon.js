import React from 'react';
import renderer from 'react-test-renderer';
import Icon from 'cf-component-icon';

test('should render type', () => {
  const component = renderer.create(<Icon type="info-sign" label="Info" />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render type/size', () => {
  const component = renderer.create(
    <Icon type="info-sign" label="Info" size="xlarge" />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render type/border/spin/muted/white', () => {
  const component = renderer.create(
    <Icon type="info-sign" label="Info" border spin muted white />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render type with no label', () => {
  const component = renderer.create(<Icon type="info-sign" label={false} />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render role', () => {
  const component = renderer.create(
    <Icon type="loading" label={false} role="status" />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
