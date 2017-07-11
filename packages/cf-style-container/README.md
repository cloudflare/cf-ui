# cf-style-container

> Cloudflare Style Container

Set of high order components and other helpers for fela based applications.

## Installation

```sh
$ npm install cf-style-container
```

### Aliased functions from fela and react-fela

We proxy/alias some useful functions from fela without changing their behaviour. See the original documentation for more details. We wrap all Fela APIs so we can eventually switch Fela to a different CSS in JS lib if ever needed.

- [combineRules](https://github.com/rofrischmann/fela/blob/master/docs/api/fela/combineRules.md)
- [connect](https://github.com/rofrischmann/fela/blob/master/packages/react-fela/docs/connect.md)
- [ThemeProvider](https://github.com/rofrischmann/fela/blob/master/packages/react-fela/docs/ThemeProvider.md)

### createComponent(rule, [type])

Very similar to [createComponent](https://github.com/rofrischmann/fela/blob/master/packages/react-fela/docs/createComponent.md) from react-fela. However, it automatically adds PropTypes from `[type]` in case that it is a React Component.

You should use this HOC every time when you want to use Fela in your component. **This is a primary way how to style React components**.

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme, size }) => ({
  fontWeight: theme[`fontWeight${size}`],
  fontSize: theme[`fontSize${size}`],
  lineHeight: theme[`lineHeight${size}`],
  marginTop: theme[`marginTop${size}`]
});

const Heading = ({ size, className, children }) => {
  const tagName = 'h' + size;
  return React.createElement(tagName, { className }, children);
};

Heading.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default createComponent(styles, Heading);
```

### createComponentStyles(rules, Component)

Useful when you need multiple classNames (and rules) in one component.

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { createComponentStyles } from 'cf-style-container';

const mainStyles = ({ theme }) => ({
  margin: theme.main.margin,
  padding: theme.main.padding,
});

const legendStyles = ({ theme }) => ({
  padding: theme.legend.padding,
  marginBottom: theme.legend.marginBottom,
  borderBottom: theme.legend.borderBottom,
});

const FormFieldset = ({ legend, styles }) => (
  <fieldset className={styles.mainStyles}>
    <legend className={styles.legendStyles}>
      {legend}
    </legend>
  </fieldset>
);

FormFieldset.propTypes = {
  styles: PropTypes.object.isRequired,
  legend: PropTypes.string.isRequired
};

export default createComponentStyles({ mainStyles, legendStyles }, FormFieldset);
```

Notice that rules are now an object. The names you chose will be used for classNames
accessible as `styles.mainStyles` and `styles.legendStyles` in this case.

### applyTheme(Component, ...themes)

A HOC that ties a Fela component with the theme (adds the theme to its
context). The themes can be functions that takes a baseTheme and returns a new
theme, or just an object.

```jsx
import HeadingUnstyled from './Heading';
import HeadingTheme from './HeadingTheme';

import { applyTheme } from 'cf-style-container';

// overrides HeadingTheme fontWeight1
const CustomTheme = () => { fontWeight1: 600 };

const Heading = applyTheme(HeadingUnstyled, HeadingTheme, CustomTheme);

// themed component
<Heading />
```

### withTheme(Component)

A HOC that passes the current theme from context into the prop `theme`. This is useful
when you need to access the theme without using `createComponent`. In other words,
you can't create a new styled component with it.

```jsx
import { withTheme } from 'cf-style-container';

const MyComponent = ({ theme }) => <div>Color: {theme.colors.hail}</div> 

export default withTheme(MyComponent);
```

### withRenderer(Component)

A HOC that passes the renderer from context into the prop `renderer`. This is useful
for third party integration when you need to generate a class name and you can't create
a new styled component with it.

```jsx
import { withRenderer } from 'cf-style-container';

const MyComponent = ({ theme }) => {
  const styles = props => ({
    fontSize: props.fontSize,
    color: 'red'
  });
  const className = renderer.renderRule(styles, { fontSize: 12 })
  return (<div>Class name: {className}</div>);
} 

export default withRenderer(MyComponent);
```

## mergeTheme(baseTheme, ...themes)

`applyTheme()` calls this method internally to merge all themes. The returned
value is a `seamless-immutable` object. It has a `theme` key that contains the
merged themes, thus it is suitable for passing down to style functions. The
types of baseTheme and themes are the same as `applyTheme()`'s.

```jsx
import { variables } from 'cf-style-const';
import { TableUnstyled, TableTheme } from 'cf-component-table';

import { applyTheme, mergeTheme } from 'cf-style-container';

// You can save this theme and pass it around, you can also apply it to a component.
const MyTableTheme = mergeTheme(variables, TableTheme, {color: 'blue'});
...
const MyTable = applyTheme(TableUnstyled, MyTableTheme);
```


## mapChildren(children, callback)

Convenient function that wraps `React.Children`. This function differs from
`React.Children.map()` in that the children list is turned into an array first,
and the callback is invoked as `callback(child, index, children)`. The
callback's result value is then mapped to the returned array of `mapChildren`.

```javascript
class TableRow extends React.Component {
  render() {
    <tr>
      {mapChildren(this.props.children, (child, index) =>
         React.cloneElement(child, {key: index}))}
    </tr>
  }
}
```

## filterProps(obj, filter)
## filterNone(obj)
## filterStyle(obj)

`filterStyle()` filters out the `style` entry from the object. Used to blacklist
the `style` props from propagating to underlying `react-dom` element when
spreading props.

`filterNone()` filters out all the entries in the object that have `undefined`
values. This function is useful to make the style objects mergeable and
composable, as any key with `undefined` value will overwrite the previous object
of the same key. This is often not the desired result.

`filterProps()` is the underlying machinary that all other filter function are
implemented with. It's essentially a reduce on the list of pairs of enumerable
object properties and their keys. The `filter(key, value, accum)` callback will
be invoked with the current key, value and accumulated value for each
pair. Useful to blacklist object keys.

All filter functions are composible.

```javascript
import { filterNone, filterProps } from 'cf-style-container';

filterNone(
  filterProps({
    border: undefined,
    color: 'blue',
    border: '1px solid black'
  }, (key, value, accum) => {
    if (key === 'border') return accum;
    else accum[key] = value;
    return accum;
  })
);

// Returns

// {color: 'blue'}
```
