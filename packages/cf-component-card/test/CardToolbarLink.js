import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import CardToolbarLink from '../src/CardToolbarLink';

test('should render', () => {
  const snapshot = felaSnapshot(
    <CardToolbarLink id="link" isActive={false} onClick={() => {}}>
      CardToolbarLink
    </CardToolbarLink>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with isActive', () => {
  const snapshot = felaSnapshot(
    <CardToolbarLink id="link" isActive={true} onClick={() => {}}>
      CardToolbarLink
    </CardToolbarLink>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
