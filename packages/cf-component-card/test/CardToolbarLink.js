import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import CardToolbarLink from '../src/CardToolbarLink';

test('should render', () => {
  const snapshot = felaSnapshot(
    <CardToolbarLink id="link" isActive={false} expandable onClick={() => {}}>
      CardToolbarLink
    </CardToolbarLink>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with isActive', () => {
  const snapshot = felaSnapshot(
    <CardToolbarLink id="link" isActive={true} expandable onClick={() => {}}>
      CardToolbarLink
    </CardToolbarLink>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render nonexpandable link', () => {
  const snapshot = felaSnapshot(
    <CardToolbarLink
      id="link"
      isActive={false}
      expandable={false}
      onClick={() => {}}
    >
      CardToolbarLink
    </CardToolbarLink>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
