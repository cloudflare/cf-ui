import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { Link } from '../../cf-component-link/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(<Link to="/route">Hello World</Link>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with onClick', () => {
  const snapshot = felaSnapshot(<Link onClick={() => {}}>Hello World</Link>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with tagName', () => {
  const snapshot = felaSnapshot(
    <Link to="/route" tagName="button">Hello World</Link>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with className', () => {
  const snapshot = felaSnapshot(
    <Link to="/route" className="special-link">Hello World</Link>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with role', () => {
  const snapshot = felaSnapshot(
    <Link to="/route" role="button" tagName="div">Hello World</Link>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with disabled', () => {
  const snapshot = felaSnapshot(<Link to="/route" disabled>Hello World</Link>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
