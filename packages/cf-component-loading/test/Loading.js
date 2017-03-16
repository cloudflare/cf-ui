import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../../cf-component-loading/src/index';

test('should render', () => {
  const component = renderer.create(<Loading />);
  expect(component.toJSON()).toMatchSnapshot();
});
