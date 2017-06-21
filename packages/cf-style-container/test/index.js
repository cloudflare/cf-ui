import React from 'react';
import {
  createComponent,
  createComponentStyles,
  mergeThemes,
  filterNone,
  filterStyle,
  mapChildren
} from '../../cf-style-container/src/index';
import { variables } from 'cf-style-const';
import renderer from 'react-test-renderer';
import felaTestContext from '../../../felaTestContext';

test('mergesThemes should accept functions themes', () => {
  const theme = mergeThemes(variables, () => ({
    color: 'yellow'
  }));
  expect(theme).toMatchSnapshot();
});

test('mergesThemes should accept object themes', () => {
  const theme = mergeThemes(variables, {
    color: 'yellow'
  });
  expect(theme).toMatchSnapshot();
});

test('mergeThemes should override the baseTheme if more than one theme is provided', () => {
  const theme = mergeThemes(
    variables,
    () => ({
      color: 'yellow',
      breakpoints: {
        desktop: '1px',
        tv: '2px'
      }
    }),
    {
      breakpoints: {
        desktop: '3px'
      }
    }
  );
  expect(theme).toMatchSnapshot();
});

test('mergeThemes should return the baseTheme if no extra theme is provided', () => {
  const theme = mergeThemes(variables);
  expect(theme).toMatchSnapshot();
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

test('filterNone will filter out all keys with undefined or null values', () => {
  expect(filterNone({ a: undefined, b: null, c: 1 })).toEqual({ c: 1 });
});

test('filterStyle will filter out the style key from an object', () => {
  expect(filterStyle({ a: 1, b: 2, style: 3 })).toEqual({ a: 1, b: 2 });
});

test('mapChildren will call a function for each child, passing its index and the entire list of children as an array', () => {
  const result = mapChildren([<div />], (child, i, children) => {
    expect(child).toBeTruthy();
    expect(i).toBeGreaterThanOrEqual(0);
    expect(children.length).toBe(1);
    return child;
  });
  expect(result).toHaveLength(1);
});
