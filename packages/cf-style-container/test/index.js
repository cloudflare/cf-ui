import React, { PropTypes } from 'react';
import {
  createComponent,
  createComponentStyles,
  applyTheme,
  ThemeProvider
} from '../../cf-style-container/src/index';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import felaTestContext from '../../../felaTestContext';

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

test('createComponentStyles creates a component', () => {
  const Foo = ({ styles }) => (
    <div className={styles.class1}><i className={styles.class2} /></div>
  );
  const FelaComponent = createComponentStyles(
    {
      class1: () => ({
        padding: '5px'
      }),
      class2: () => ({
        margin: '2px'
      })
    },
    Foo
  );
  const component = renderer.create(felaTestContext(<FelaComponent />));
  expect(component.toJSON()).toMatchSnapshot();
});
