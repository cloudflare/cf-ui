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
    cssNode={null}
    fontNode={null}
    dev={false}
    selectorPrefix="cf-"
  >
    <YourApp />
  </StyleProvider>
);
```

### props and default values

- **cssNode**: *null*, where to render CSS styles (DOM node)
- **fontNode**: *null*, where to render CSS styles related to fonts (DOM node)
- **dev**: *false*, in dev mode it applies more Fela plugins (validator, beautifier, monolithic)
- **selectorPrefix**: *'cf-'*, prefix for CSS classnames

Dev mode produces developer friendly output (CSS is formatted), validates all rules and merges atomic classNames into one. That's important for snapshot testing as well.

Or you can just get Fela's renderer (useful for server-side rendering)

```jsx
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-fela';
import { createRenderer } from 'cf-style-provider';

// default values
const renderer = createRenderer({
  fontNode: null, // where to render CSS styles related to fonts (DOM node)
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
