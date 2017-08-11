import React from 'react';
import PropTypes from 'prop-types';
import { createRenderer } from 'cf-style-provider';
import { Provider } from 'react-fela';
import { variables } from 'cf-style-const';
import { felaSnapshot, felaTestContext } from 'cf-style-provider';
import { shallow, mount } from 'enzyme';
import {
  createComponent,
  createComponentStyles,
  mergeThemes,
  filterNone,
  filterStyle,
  mapChildren,
  applyTheme,
  withTheme,
  withRenderer
} from '../src/index';

test('mergeThemes should return an immutable and deeply cloned object', () => {
  const themeA = () => ({ color: 'yellow' });
  const themeB = {
    color: 'blue',
    breakpoints: {
      desktop: '1em',
      desktopLarge: '1em',
      mobile: '1em',
      mobileWide: '1em',
      tablet: '1em',
      tabletWide: '1em',
      tabletLegacy: '1em'
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
  Foo.propTypes = {
    styles: PropTypes.object.isRequired
  };
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

test('applyTheme will set the display name to the same display name as the wrapped component with a "Themed" prefix', () => {
  const SomeComponent = () => <div>foo</div>;
  SomeComponent.displayName = 'SomeComponent';
  const ThemedComponent = applyTheme(SomeComponent, {});

  const wrapper = shallow(<ThemedComponent />);
  expect(ThemedComponent.displayName).toBe('ThemedSomeComponent');
});

test('withTheme will pass theme as a prop', () => {
  const Component = () => <div />;
  const WithThemeComponent = withTheme(Component);
  const wrapper = mount(felaTestContext(<WithThemeComponent />));
  expect(wrapper.find(Component).prop('theme')).toEqual(variables);
});

test('withRenderer will pass renderer as a prop', () => {
  const renderer = createRenderer();
  const styles = props => ({
    fontSize: props.fontSize,
    color: 'red'
  });

  const Component = ({ renderer }) => {
    const className = renderer.renderRule(styles, { fontSize: 12 });
    return <div>{className}</div>;
  };
  Component.propTypes = {
    renderer: PropTypes.object.isRequired
  };
  const WithRendererComponent = withRenderer(Component);
  const wrapper = mount(
    <Provider renderer={renderer}><WithRendererComponent /></Provider>
  );
  expect(wrapper.find(Component).prop('renderer')).toEqual(renderer);
  expect(wrapper.find(Component).text()).toBe('a b');
  expect(renderer.renderToString()).toBe('.a{font-size:12px}.b{color:red}');
});
