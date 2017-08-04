# cf-ui

> Cloudflare UI Framework

cf-ui is a set of over 50 packages used to build UIs at Cloudflare using
projects such as [React](https://facebook.github.io/react/),
[Fela](http://fela.js.org), [Lerna](https://lernajs.io) and more.

- **[Read the introductory blog post &rarr;](https://blog.cloudflare.com/cf-ui/)**
- **[Interested in more of our technical decisions? See `cf-ui/discussions` &rarr;](discussions)**

## Usage

Whilst cf-ui is used extensively within Cloudflare, it is also an evolving set of components and therefore can be unstable. **We recommend only using this toolset to build interfaces for Cloudflare-internal products.** However, feel free to follow along and contribute as we continue to grow this library.

## cf-ui meets CSS in JS

We are currently migrating cf-ui to CSS in JS powered by [Fela](https://github.com/rofrischmann/fela). That means that our components include styles written in JavaScript and you can use them out of the box! However, you need to start using Fela in your project. [Follow our migration here](https://github.com/cloudflare/cf-ui/issues/100).

## Getting Started

To view all of the available components and packages, see the [`packages/` directory](packages). Do you want to see examples? Check out our [documentation](https://cloudflare.github.io/cf-ui/).

## CSS in JS setup

cf-ui components expect that there is [Fela Renderer](http://fela.js.org/docs/basics/Renderer.html) in the context of your React app. It's the way how to render styles that come with our components into the `<style></style>` node. **You have to use Fela in your project if you want to use cf-ui.** Here's the code example how:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { StyleProvider } from 'cf-style-provider';
import { Button } from 'cf-component-button';

ReactDOM.render(
  <StyleProvider>
    <Button type="primary" onClick={() => console.log('clicked')}>
      Primary Button
    </Button>
  </StyleProvider>,
  document.getElementById('react-app')
);
```

Do you want to try for yourself?

```sh
git clone git@github.com:cloudflare/cf-ui.git
cd cf-ui/packages/example
npm install
npm run build
open index.html
```

## Contributing

To get started contributing please see [CONTRIBUTING.md](CONTRIBUTING.md)

## Deploying new packages

When a commit hits the `master` branch it will go through the CI pipeline which
will at the end publish the packages to the npm registry given that the commits
have the correct conventional commits format.

Here's a example conventional commit message for reference. Note that the
package name needs to be in the scope section of the message but otherwise
adhere to the [conventional commits standard](https://conventionalcommits.org/).

```
fix(cf-component-radio): allow padding/margin override

Previously we only allowed `marginTop` and `paddingLeft` to be
overridden but we want to override the whole shorthand in some places
where this component is implemented.
```

## License

cf-ui is [BSD Licensed](LICENSE)
