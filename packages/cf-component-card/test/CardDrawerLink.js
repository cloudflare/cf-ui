import React from 'react';
import renderer from 'react-test-renderer';
import CardDrawerLink from '../src/CardDrawerLink';

test('should render', () => {
  const component = renderer.create(
    <CardDrawerLink id="link" isActive={false} onClick={() => {}}>
      CardDrawerLink
    </CardDrawerLink>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with isActive', () => {
  const component = renderer.create(
    <CardDrawerLink id="link" isActive={true} onClick={() => {}}>
      CardDrawerLink
    </CardDrawerLink>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
