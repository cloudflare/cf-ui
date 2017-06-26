import React from 'react';
import felaSnapshot from 'cf-style-provider/src/felaSnapshot';
import { ButtonGroup, Button } from '../../cf-component-button/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(<ButtonGroup>Hello</ButtonGroup>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render 1 button', () => {
  const snapshot = felaSnapshot(
    <ButtonGroup>
      <Button type="primary" onClick={() => {}}>Button</Button>
    </ButtonGroup>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render 2 buttons', () => {
  const snapshot = felaSnapshot(
    <ButtonGroup>
      <Button type="primary" onClick={() => {}}>Button</Button>
      <Button type="primary" onClick={() => {}}>Button</Button>
    </ButtonGroup>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render 3 buttons', () => {
  const snapshot = felaSnapshot(
    <ButtonGroup>
      <Button type="primary" onClick={() => {}}>Button</Button>
      <Button type="primary" onClick={() => {}}>Button</Button>
      <Button type="primary" onClick={() => {}}>Button</Button>
    </ButtonGroup>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render 3 buttons with spacing', () => {
  const snapshot = felaSnapshot(
    <ButtonGroup spaced>
      <Button type="primary" onClick={() => {}}>Button</Button>
      <Button type="primary" onClick={() => {}}>Button</Button>
      <Button type="primary" onClick={() => {}}>Button</Button>
    </ButtonGroup>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
