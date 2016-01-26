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
$ npm run examples
# This will take awhile
$ node example/server.js
# Now open http://localhost:8000/ in your browser.
```
