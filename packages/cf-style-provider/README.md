# cf-style-provider

> Cloudflare Style Provider

In order to support cf-ui (Fela based components) in your project, you need to wrap your app by our Provider. Check out the main README.md to see it in use.

## Installation

```sh
$ npm install cf-style-provider
```

## Usage

```jsx
import { StyleProvider } from 'cf-style-provider';

render(
  <StyleProvider
    dev={false}
    selectorPrefix="cf-"
  >
    <YourApp />
  </StyleProvider>
);
```

### props and default values

- **dev**: *false*, in dev mode it applies more Fela plugins (validator, beautifier, monolithic)
- **selectorPrefix**: *'cf-'*, prefix for CSS classnames

Dev mode produces developer friendly output (CSS is formatted), validates all rules and merges atomic classNames into one. 

Or you can just get Fela's renderer (useful for server-side rendering)

```jsx
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-fela';
import { createRenderer } from 'cf-style-provider';

// default values
const renderer = createRenderer({
  dev: false, // in dev mode it applies more Fela plugins (validator, ...)
  selectorPrefix: 'cf-' // prefix for CSS classnames
});

const body = ReactDOMServer.renderToString(
  <Provider renderer={renderer}>
    <Main />
  </Provider>
);

renderer.renderToString(); // returns CSS as a string
```

## Used Fela plugins

We use multiple fela plugins that extend typical CSS-in-JS syntax. Check them out for more details:

- [prefixer](https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-prefixer)
- [fallback-value](https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-fallback-value)
- [unit](https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-unit)
- [embedded](https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-embedded)
- [named-media-query](https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-named-media-query)
  - mobile
  - mobileWide
  - tablet
  - desktop
  - desktopLarge
