# Contributing to cf-ui

## Getting Started

To get started run:

```sh
git clone git@github.com:cloudflare/cf-ui.git
cd cf-ui
yarn install
yarn run bootstrap
```

> Because we use [Lerna](https://lernajs.io) you'll also need to run
> `yarn run bootstrap` anytime that you have changed the dependencies within a
> package.

## Commiting changes

`cf-ui` follows the [`conventional-commits`](http://conventionalcommits.org/)
standard and enforces it with a pre-commit hook that should have been installed
on your system when you installed the dependencies from `npm`.

Make sure to include the full name of the package that you are changing in the
scope part of the commit message in order to get the benefit of `lerna`
automatically setting the correct version number for the component as well as
generating the correct CHANGELOG.

## Development tasks

```sh
yarn run build # Build all the packages using Babel (targets: commonjs, ES6)
yarn run build -- cf-component-button # Build one package (targets: commonjs, ES6)
yarn run lint # Run the eslint
yarn run prettier # Reformats the whole JS codebase, look for an on-save integration for your editor
yarn test # Run the tests, you need to run 'yarn run build' first
yarn test -- --testPathPattern cf-component-button # Run the tests on a single package
yarn test -- --watchAll # Run the tests in watch mode
```

## Publishing packages

cf-ui uses [Lerna](https://lernajs.io) in order to publish new versions of
packages.

```sh
yarn run publish
```
