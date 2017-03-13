import React, { PropTypes } from 'react';
import {
  createComponent,
  applyTheme,
  ThemeProvider,
  color
} from 'cf-style-container';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import felaTestContext from '../../../styleguide/felaTestContext';

test('color should return correct value', () => {
  expect(color('red a(90%)')).toBe('rgba(255, 0, 0, 0.9)');
});

test('applyTheme should overwrite the baseTheme and update the context', () => {
  const ThemedFoo = applyTheme(
    createComponent(props => ({
      color: props.theme.color
    })),
    () => ({
      color: 'yellow'
    })
  );
  const component = renderer.create(felaTestContext(<ThemedFoo />));
  expect(component.toJSON()).toMatchSnapshot();
});

test('createComponent creates empty component', () => {
  const FelaComponent = createComponent(() => {});
  const component = renderer.create(felaTestContext(<FelaComponent />));
  expect(component.toJSON()).toMatchSnapshot();
});
