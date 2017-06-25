import React from 'react';
import {
  createComponent,
  createComponentStyles,
  connectStyles,
  mergeThemes,
  filterNone,
  filterStyle,
  mapChildren
} from '../../cf-style-container/src/index';
import { variables } from 'cf-style-const';
import { felaSnapshot } from 'cf-style-provider';

test('connectStyles should return a partial function that accepts a React element that returns a FelaComponent', () => {
  const createElement = connectStyles({ color: 'blue' }, { color: 'black' });
  expect(typeof createElement === 'function').toBe(true);
  expect(createElement('div').displayName).toBe('FelaComponent');
});

test("connectStyles's return value should return a styled component when invoked", () => {
  const Element = connectStyles({ color: 'blue' }, { color: 'black' })('div');
  expect(felaSnapshot(<Element />)).toMatchSnapshot();
});

test('connectStyles should accept styles functions or objects', () => {
  const Element = connectStyles({ color: 'blue' }, ({ theme }) => ({
    color: theme.colorWhite
  }))('div');
  expect(felaSnapshot(<Element />)).toMatchSnapshot();
});

test('mergeThemes should return an immutable and deeply cloned object', () => {
  const themeA = () => ({ color: 'yellow' });
  const themeB = {
    color: 'blue',
    breakpoints: {
      desktop: '1em',
      desktopLarge: '1em',
      mobile: '1em',
      mobileWide: '1em',
      tablet: '1em'
    }
  };
  const props = mergeThemes(variables, themeA, themeB);

  expect(() => {
    props.theme.color = 'white';
  }).toThrow();

  expect(props.theme.color).toEqual('blue');

  expect(props.theme.breakpoints).toEqual(themeB.breakpoints);

  // To be or not to be. That is the question.
  // https://facebook.github.io/jest/docs/en/expect.html#tobevalue
  expect(props.theme.breakpoints).not.toBe(themeB.breakpoints);

  expect(() => {
    delete props.theme.color;
  }).toThrow();
});

test('mergesThemes should accept functions themes', () => {
  const props = mergeThemes(variables, () => ({
    color: 'yellow'
  }));
  expect(props).toMatchSnapshot();
});

test('mergesThemes should accept object themes', () => {
  const props = mergeThemes(variables, {
    color: 'yellow'
  });
  expect(props).toMatchSnapshot();
});

test('mergeThemes should override the baseTheme if more than one theme is provided', () => {
  const props = mergeThemes(
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
  expect(props).toMatchSnapshot();
});

test('mergeThemes should return the baseTheme if no extra theme is provided', () => {
  const props = mergeThemes(variables);
  expect(props).toMatchSnapshot();
});

test('createComponent creates empty component', () => {
  const FelaComponent = createComponent(() => {});
  const snapshot = felaSnapshot(<FelaComponent />);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
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
  const snapshot = felaSnapshot(<FelaComponent />);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
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
