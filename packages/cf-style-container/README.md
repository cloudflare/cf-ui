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

You should use this HOC every time when you want to use Fela in your component and you need only one className (one rule function).

```jsx
import React, { PropTypes } from 'react';
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
import React, { PropTypes } from 'react';
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
    {' '}
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

### applyTheme(Component, theme)

And HOC that ties a Fela component with the theme (adds the theme to its context).

```jsx
import HeadingUnstyled from './Heading';
import HeadingTheme from './HeadingTheme';

import { applyTheme } from 'cf-style-container';

const Heading = applyTheme(HeadingUnstyled, HeadingTheme);

// themed component
<Heading />
```

