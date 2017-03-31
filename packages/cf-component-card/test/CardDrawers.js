import React from 'react';
import renderer from 'react-test-renderer';
import {
  CardDrawers,
  CardToolbar,
  CardToolbarLink
} from '../../cf-component-card/src/index';

test('should render when given all the props', () => {
  const component = renderer.create(
    <CardDrawers
      onClick={() => {}}
      active="one"
      drawers={[
        { id: 'one', name: 'One', content: 'One Content' },
        { id: 'two', name: 'Two', content: 'Two Content' }
      ]}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render when not given props', () => {
  const component = renderer.create(
    <CardDrawers
      drawers={[
        { id: 'one', name: 'One', content: 'One Content' },
        { id: 'two', name: 'Two', content: 'Two Content' }
      ]}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
