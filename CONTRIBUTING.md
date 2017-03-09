# Contributing to cf-ui

## Getting Started

To get started run:

```sh
git clone git@github.com:cloudflare/cf-ui.git
cd cf-ui
npm install
npm run bootstrap
```

> Because we use [Lerna](https://lernajs.io) you'll also need to run
> `npm run bootstrap` anytime that you have changed the dependencies within a
> package.

## Development tasks

```sh
npm start # Start the dev server, open http://localhost:8000 and start deving
npm run build # Build all the packages using Babel (targets: commonjs, ES6) and Webpack (umd)
npm run lint # Run the eslint
npm run prettier # Reformats the whole JS codebase, look for an on-save integration for your editor
npm test # Run the tests
npm test -- --testPathPattern cf-component-button # Run the tests on a single package
npm test -- --watchAll # Run the tests in watch mode
npm run gen # Autogenerate the style guide (imports all components into one page)
```

## Style Guide

### To build

```sh
npm run build:styleguide
open docs/index.html
```

### To work continuously

```sh
npm start
open http://localhost:8000
```

### To publish

```sh
npm run build:styleguide
```

and commit the changed `/docs` folder.

## Publishing packages

cf-ui uses [Lerna](https://lernajs.io) in order to publish new versions of
packages.


```sh
npm run publish
```
