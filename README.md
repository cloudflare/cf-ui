# cf-ui

> Cloudflare UI Framework

cf-ui is a set of over 50 packages used to build UIs at Cloudflare using
projects such as [React](https://facebook.github.io/react/),
[Redux](http://redux.js.org), [npm](https://www.npmjs.com),
[Lerna](https://lernajs.io), and more.


## Important note

We are currently migrating cf-ui to CSS in JS using [Fela](https://github.com/rofrischmann/fela). That means that our components will finally include styles so you can use them out of the box! However, you need to start using Fela in your project. No worries, [it's pretty easy](http://fela.js.org/)! We will add more description once the migration is done. So far, these components are migrated:
- cf-component-button


**[Read the introductory blog post &rarr;](https://blog.cloudflare.com/cf-ui/)**

**[Interested in more of our technical decisions? See `cf-ui/discussions` &rarr;](discussions)**

## Getting Started

```bash
$ npm install [package-name]
$ npm run build
$ npm run bootstrap
```
## Viewing the Examples

```bash
$ npm run examples:[build|dev]:[internal:external]
```

Open `cf-ui/docs/index.html` in your browser.


To view all of the available packages, see the [`packages/` directory](packages).

## Contributing

To get started contributing please see [CONTRIBUTING.md](CONTRIBUTING.md)

## License

cf-ui is [BSD Licensed](LICENSE)
