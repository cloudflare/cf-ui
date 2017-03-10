import React from 'react';
import renderer from 'react-test-renderer';
import { CardDrawers, CardToolbar, CardToolbarLink } from 'cf-component-card';

test('should render', () => {
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
