# cf-style-provider

> Cloudflare Style Provider

In order to support cf-ui (Fela based components) in your project, you need to wrap your app by our Provider. Check out the main README.md to see it in use.

## Installation

```sh
$ npm install cf-style-provider
```

## Usage

```jsx
import { createProvider } from 'cf-style-provider';

// default values
const StyleProvider = createProvider({
  cssNode: null, // where to render CSS styles (DOM node)
  fontNode: null, // where to render CSS styles related to fonts (DOM node)
  dev: false, // in dev mode it applies more Fela plugins (validator, ...)
  selectorPrefix: 'cf-' // prefix for CSS classnames
});

render(<StyleProvider><YourApp /></StyleProvider>);
```

Or you can just get Fela's renderer (useful for server-side rendering)

```jsx
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-fela';
import { createRenderer } from 'cf-style-provider';

// default values
const renderer = createRenderer({
  cssNode: null, // where to render CSS styles (DOM node)
  fontNode: null, // where to render CSS styles related to fonts (DOM node)
  dev: false, // in dev mode it applies more Fela plugins (validator, ...)
  selectorPrefix: 'cf-' // prefix for CSS classnames
});

const body = ReactDOMServer.renderToString(
  <Provider renderer={renderer}>
    <Main />
  </Provider>
);

renderer.renderToString();
```
