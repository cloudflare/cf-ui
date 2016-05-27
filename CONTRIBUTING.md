# Contributing to cf-ui

## Getting Started

To get started run:

```sh
$ git clone ssh://git@stash.cfops.it:7999/~jkyle/cf-ui.git
$ npm install
$ npm run bootstrap
```

> Because we use [Lerna](https://lernajs.io) you'll also need to run
> `npm run bootstrap` anytime that you have changed the dependencies within a
> package.

## Development tasks

```sh
$ npm run build # Build all the packages using Babel
$ npm run test # Run the tests and linter a single time
$ npm run test -- --package cf-component-button # Run the tests on a single package
$ npm run test -- --no-instanbul # Turn off code coverage
$ npm run test -- --browsers Chrome,Firefox # Specify the browsers you want to test in
$ npm run dev # Run the tests and linter continuously (this support the same flags as test)
$ npm run lint # Run the linter a single time
```

## Component examples

To build the examples:

```sh
$ npm run examples:build:internal # Build the example site with CloudFlare's internal styles (employees only)
$ npm run examples:build:external # Build the example site with CloudFlare's external styles
$ open dist/index.html
```

Or if you want to continuously work on the examples:

```sh
$ npm run examples:dev:internal # Dev on the example site with CloudFlare's internal styles (employees only)
$ npm run examples:dev:external # Dev on the example site with CloudFlare's external styles
```

## Publishing packages

cf-ui uses [Lerna](https://lernajs.io) in order to publish new versions of
packages.

If you were to manually publish everything it would essentially be:

```sh
$ git checkout master
$ git pull origin master --rebase
$ ./node_modules/.bin/check-installed-dependencies
$ npm run build
$ cd packages/[[package-name]]
# edit version inside package.json
$ git tag -a "[[version]]"
$ npm publish
$ git push origin master --follow-tags
```

## Managing npm owners

If you want to add, remove, or update owners you can use the scripts in the
`scripts/` directory which manipulates the NPM_OWNERS file.

```sh
$ ./scripts/npm-owner-grant.sh  # Add a new owner
$ ./scripts/npm-owner-revoke.sh # Remove an owner
$ ./scripts/npm-owner-update.sh # Update the owners to what is in NPM_OWNERS (does not remove any existing owners, only adds missing ones)
```
