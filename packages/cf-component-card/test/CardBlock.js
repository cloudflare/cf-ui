import React from 'react';
import renderer from 'react-test-renderer';
import { CardBlock } from '../../cf-component-card/src/index';

test('should render', () => {
  const component = renderer.create(<CardBlock>CardBlock</CardBlock>);
  expect(component.toJSON()).toMatchSnapshot();
});
