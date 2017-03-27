import React, { PropTypes } from 'react';
import { createProvider } from '../../cf-style-provider/src/index';
import renderer from 'react-test-renderer';

test('StyleProvider should render', () => {
  const StyleProvider = createProvider();
  const component = renderer.create(<StyleProvider><div /></StyleProvider>);
  expect(component.toJSON()).toMatchSnapshot();
});
