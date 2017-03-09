import React from 'react';
import Button from '../src/Button';
import renderer from 'react-test-renderer';

import felaTestContext from '../../../styleguide/felaTestContext';

test('should render with type', () => {
  const component = renderer.create(
    felaTestContext(<Button type="primary" onClick={() => {}}>Button</Button>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with type/disabled', () => {
  const component = renderer.create(
    felaTestContext(
      <Button type="primary" disabled onClick={() => {}}>Button</Button>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render as submit', () => {
  const component = renderer.create(
    felaTestContext(
      <Button type="primary" submit onClick={() => {}}>Button</Button>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with loading', () => {
  const component = renderer.create(
    felaTestContext(
      <Button type="primary" loading onClick={() => {}}>Button</Button>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with loading and disabled overridden', () => {
  const component = renderer.create(
    felaTestContext(
      <Button type="primary" loading disabled={false} onClick={() => {}}>
        Button
      </Button>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});
