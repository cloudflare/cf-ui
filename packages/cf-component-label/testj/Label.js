import React from 'react';
import renderer from 'react-test-renderer';
import Label from 'cf-component-label';

test('should render', () => {
  const component = renderer.create(<Label type="default">A Label</Label>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with custom tagName', () => {
  const component = renderer.create(
    <Label type="default" tagName="small">A Label</Label>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
