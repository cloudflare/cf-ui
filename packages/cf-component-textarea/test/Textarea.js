import React from 'react';
import renderer from 'react-test-renderer';
import Textarea from '../../cf-component-textarea/src/index';

test('should render', () => {
  const component = renderer.create(
    <Textarea name="example" value="content" onChange={() => {}} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
