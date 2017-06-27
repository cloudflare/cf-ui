# cf-style-provider

> Cloudflare Style Provider

In order to support cf-ui (fela based components) in your project, you need to wrap your app by our StyleProvider. Check out the main README.md to see it in use. This package also provides testing utilities. Our fela setup consists of many plugins, enhancers and themes. **To ensure that everything has the same context and works properly, you should never use packages as `fela`, `fela-dom`, `react-fela` or `cf-style-const` directly**. Always use `cf-style-provider`.

## Installation

```sh
$ npm install cf-style-provider
```

## StyleProvider

```jsx
import { StyleProvider } from 'cf-style-provider';

render(
  <StyleProvider
    dev={false}
    renderer={undefined}
  >
    <YourApp />
  </StyleProvider>
);
```

### props and default values

- **dev**: *false*, in dev mode it applies more Fela plugins (validator, beautifier, monolithic)
- **renderer**: *undefined*, StyleProvider creates fela renderer internally but sometimes you might want to inject your own instance if you need to expose other renderer's APIs (e.g. for testing) or to ensure that there is only single instance of fela renderer in your application

Dev mode produces developer friendly output (CSS is formatted), validates all rules and merges atomic classNames into one. Fela automatically creates `<style>` nodes in `<head>` node and injects the styles.

## createRenderer

Or you can just get Fela's renderer (useful for server-side rendering)

```jsx
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-fela';
import { createRenderer } from 'cf-style-provider';

// default values
const renderer = createRenderer({
  dev: false, // in dev mode it applies more Fela plugins (validator, ...)
});

const body = ReactDOMServer.renderToString(
  <Provider renderer={renderer}>
    <Main />
  </Provider>
);

renderer.renderToString(); // returns CSS as a string
```

## felaTestContext

**For testing**. HOC that passes fela renderer and base theme into the
context. Handy for testing with enzyme.

**NOTE:** felaTestContext is not exported from the index, you must provide a
deep path to acccess it.

```js
import { mount } from 'enzyme';
import { felaTestContext } from 'cf-style-provider';

test('should call onPageChange when clicking another page', () => {
  const onPageChange = createStub();

  const wrapper = mount(
    felaTestContext(
      <PaginationBuilder
        onPageChange={onPageChange}
        totalCount={20}
        page={1}
        perPage={1}
      />
    )
  );

  const items = wrapper.find('li');
  items.at(2).find('a').simulate('click');
  expect(onPageChange.called).toBeTruthy();
});
```

## felaSnapshot

**For testing**. Uses internally felaTestContext. It shallow renders the component and returns snapshots of DOM and styles as a object with properties `component` and `styles`. Use it like this:

**NOTE:** feleSnapshot is not exported from the index, you must provide a deep
path to acccess it.

```js
import React from 'react';
import { Form } from '../src/index';
import { felaSnapshot } from 'cf-style-provider';

test('should render horizontal layout', () => {
  const snapshot = felaSnapshot(
    <Form layout="horizontal" onSubmit={() => console.log('submit')}>
      Form
    </Form>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
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
