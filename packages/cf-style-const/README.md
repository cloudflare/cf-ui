# cf-style-const

> Cloudflare Style Constants

Constants used to theme cf-ui and cf-ux and all other Fela components. This should not be used (required) directly. `variables` are already passed as `this.context.theme` through the whole React codebase in all our projects that use CSS in JS. You might want to use some HOC as `createComponent()` from `cf-style-container` that wires `this.context.theme` into `props.theme`.

## Installation

```sh
$ npm install cf-style-const
```
