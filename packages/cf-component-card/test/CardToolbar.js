import React from 'react';
import renderer from 'react-test-renderer';
import CardToolbar from '../src/CardToolbar';

test('should render', () => {
  const component = renderer.create(
    <CardToolbar controls={'Controls'} links={'Links'} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
