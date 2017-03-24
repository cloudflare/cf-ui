# cf-ui

> Cloudflare UI Framework

cf-ui is a set of over 50 packages used to build UIs at Cloudflare using
projects such as [React](https://facebook.github.io/react/),
[Fela](http://fela.js.org), [Lerna](https://lernajs.io) and more.

- **[Read the introductory blog post &rarr;](https://blog.cloudflare.com/cf-ui/)**
- **[Interested in more of our technical decisions? See `cf-ui/discussions` &rarr;](discussions)**

## cf-ui meets CSS in JS

We are currently migrating cf-ui to CSS in JS powered by [Fela](https://github.com/rofrischmann/fela). That means that our components include styles written in JavaScript and you can use them out of the box! However, you need to start using Fela in your project. [Follow our migration here](https://github.com/cloudflare/cf-ui/issues/100).

## Getting Started

To view all of the available components and packages, see the [`packages/` directory](packages). Do you want to see examples? Check out our [documentation](https://cloudflare.github.io/cf-ui/).

## CSS in JS setup

cf-ui components expect that there is [Fela Renderer](http://fela.js.org/docs/basics/Renderer.html) in the context of your React app. It's the way how to render styles that come with our components into the `<style></style>` node. **You have to use Fela in your project if you want to use cf-ui.** Here's the code example how:

```jsx
// React
import React from 'react';
import ReactDOM from 'react-dom';

// Fela imports, minimal set of plugins that we recommend
import { createRenderer } from 'fela';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import unit from 'fela-plugin-unit';
import lvha from 'fela-plugin-lvha';
import fontRenderer from 'fela-font-renderer';
import { Provider } from 'react-fela';

// cf-ui component
import { Button as ButtonUnstyled, ButtonTheme } from 'cf-component-button';

// our global consts (theme) and ThemeProvider, you might want to use your
// own global theme
import { variables } from 'cf-style-const';
import { ThemeProvider, applyTheme } from 'cf-style-container';

// cf-ui components export React components and themes, you have to combine
// them together first, we have our private set of wrapper components (cf-ux)
// that do just that, you might want to use your own theme
const Button = applyTheme(ButtonUnstyled, ButtonTheme);

// Empty DOM nodes for styles and React, note that everything can be server
// side rendered if you wish
const fontNode = document.getElementById('font-stylesheet');
const cssNode = document.getElementById('stylesheet');
const htmlNode = document.getElementById('react-app');

// creates a new renderer to render styles
// pick your own className prefix
const renderer = createRenderer({
  plugins: [prefixer(), fallbackValue(), unit(), lvha()],
  enhancers: [fontRenderer(fontNode)],
  selectorPrefix: ['foo-']
});

ReactDOM.render(
  <Provider renderer={renderer} mountNode={cssNode}>
    <ThemeProvider theme={variables}>
      <Button type="primary" onClick={() => console.log('clicked')}>
        Primary Button
      </Button>
    </ThemeProvider>
  </Provider>,
  htmlNode
);

```

Do you want to try for yourself?

```sh
git clone git@github.com:cloudflare/cf-ui.git
cd cf-ui/example
yarn install
yarn run build
open index.html
```

## Contributing

To get started contributing please see [CONTRIBUTING.md](CONTRIBUTING.md)

## License

cf-ui is [BSD Licensed](LICENSE)
