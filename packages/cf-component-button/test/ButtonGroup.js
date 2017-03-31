import React from 'react';
import renderer from 'react-test-renderer';
import felaTestContext from '../../../felaTestContext';
import { ButtonGroup, Button } from '../../cf-component-button/src/index';

test('should render', () => {
  const component = renderer.create(
    felaTestContext(<ButtonGroup>Hello</ButtonGroup>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render 1 button', () => {
  const component = renderer.create(
    felaTestContext(
      <ButtonGroup>
        <Button type="primary" onClick={() => {}}>Button</Button>
      </ButtonGroup>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render 2 buttons', () => {
  const component = renderer.create(
    felaTestContext(
      <ButtonGroup>
        <Button type="primary" onClick={() => {}}>Button</Button>
        <Button type="primary" onClick={() => {}}>Button</Button>
      </ButtonGroup>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render 3 buttons', () => {
  const component = renderer.create(
    felaTestContext(
      <ButtonGroup>
        <Button type="primary" onClick={() => {}}>Button</Button>
        <Button type="primary" onClick={() => {}}>Button</Button>
        <Button type="primary" onClick={() => {}}>Button</Button>
      </ButtonGroup>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});
