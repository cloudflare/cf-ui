import React, { PropTypes } from 'react';
import { StyleProvider } from '../../cf-style-provider/src/index';
import renderer from 'react-test-renderer';

test('StyleProvider should render', () => {
  const component = renderer.create(<StyleProvider><div /></StyleProvider>);
  expect(component.toJSON()).toMatchSnapshot();
});
