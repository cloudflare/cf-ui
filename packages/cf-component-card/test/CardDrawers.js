import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import {
  CardDrawers,
  CardToolbar,
  CardToolbarLink
} from '../../cf-component-card/src/index';

test('should render when given all the props', () => {
  const snapshot = felaSnapshot(
    <CardDrawers
      onClick={() => {}}
      active="one"
      drawers={[
        { id: 'one', name: 'One', content: 'One Content' },
        { id: 'two', name: 'Two', content: 'Two Content' }
      ]}
    />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render when not given props', () => {
  const snapshot = felaSnapshot(
    <CardDrawers
      drawers={[
        { id: 'one', name: 'One', content: 'One Content' },
        { id: 'two', name: 'Two', content: 'Two Content' }
      ]}
    />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
