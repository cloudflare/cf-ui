# cf-ui

This is a monorepo with all of CloudFlare's UI components and utils.

To get started run:

```sh
$ git clone ssh://git@stash.cfops.it:7999/~jkyle/cf-ui.git
$ npm install
$ npm run bootstrap
```

To run the build:

```sh
$ npm run build
```

To run the tests:

```sh
$ npm run test
```

To run the lint:

```sh
$ npm run lint
```

To test a single package:

```sh
$ npm test -- --package cf-component-button
```

To continuously run the build, lint, and tests:

```sh
$ npm run dev
```

To see the examples:

```sh
$ npm run examples:build
# This will take awhile
$ open dist/index.html
# Now open http://path/to/cf-ui/dist/index.html in your browser.
```

Or you can run the examples dev task:

```sh
$ npm run examples:dev
```

There are also versions of each of these tasks for the public styles

```sh
$ npm run example:build:public
$ npm run example:dev:public
```
