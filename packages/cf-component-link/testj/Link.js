import React from 'react';
import renderer from 'react-test-renderer';
import Link from 'cf-component-link';

test('should render', () => {
  const component = renderer.create(<Link to="/route">Hello World</Link>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with onClick', () => {
  const component = renderer.create(
    <Link onClick={() => {}}>Hello World</Link>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with tagName', () => {
  const component = renderer.create(
    <Link to="/route" tagName="button">Hello World</Link>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with className', () => {
  const component = renderer.create(
    <Link to="/route" className="special-link">Hello World</Link>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with role', () => {
  const component = renderer.create(
    <Link to="/route" role="button" tagName="div">Hello World</Link>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with disabled', () => {
  const component = renderer.create(
    <Link to="/route" disabled>Hello World</Link>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
