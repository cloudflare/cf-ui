import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { Input } from '../../cf-component-input/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(
    <Input name="example" value="content" onChange={() => {}} />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with type', () => {
  const snapshot = felaSnapshot(
    <Input type="search" name="example" value="content" onChange={() => {}} />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with error', () => {
  const snapshot = felaSnapshot(
    <Input name="example" value="" invalid onChange={() => {}} />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with placeholder', () => {
  const snapshot = felaSnapshot(
    <Input
      name="example"
      value=""
      placeholder="placeholder"
      onChange={() => {}}
    />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with autocomplete', () => {
  const snapshot = felaSnapshot(
    <Input name="example" value="" autoComplete="off" onChange={() => {}} />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should pass all props down to the inner input and merge classnames', () => {
  const snapshot = felaSnapshot(
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
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
