import React from 'react';
import renderer from 'react-test-renderer';
import CardToolbarLink from '../src/CardToolbarLink';

test('should render', () => {
  const component = renderer.create(
    <CardToolbarLink id="link" isActive={false} onClick={() => {}}>
      CardToolbarLink
    </CardToolbarLink>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with isActive', () => {
  const component = renderer.create(
    <CardToolbarLink id="link" isActive={true} onClick={() => {}}>
      CardToolbarLink
    </CardToolbarLink>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
