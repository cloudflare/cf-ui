import React from 'react';
import renderer from 'react-test-renderer';
import Input from 'cf-component-input';

test('should render', () => {
  const component = renderer.create(
    <Input name="example" value="content" onChange={() => {}} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with type', () => {
  const component = renderer.create(
    <Input type="search" name="example" value="content" onChange={() => {}} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with error', () => {
  const component = renderer.create(
    <Input name="example" value="" invalid onChange={() => {}} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with placeholder', () => {
  const component = renderer.create(
    <Input
      name="example"
      value=""
      placeholder="placeholder"
      onChange={() => {}}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with autocomplete', () => {
  const component = renderer.create(
    <Input name="example" value="" autoComplete="off" onChange={() => {}} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should pass all props down to the inner input and merge classnames', () => {
  const component = renderer.create(
    <Input
      className="klass"
      name="example"
      value=""
      onChange={() => {}}
      disabled
      invalid
      type="number"
      data-shadowed={true}
      min={3}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
