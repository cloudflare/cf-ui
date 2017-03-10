import React from 'react';
import renderer from 'react-test-renderer';
import Textarea from 'cf-component-textarea';

test('should render', () => {
  const component = renderer.create(
    <Textarea name="example" value="content" onChange={() => {}} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
