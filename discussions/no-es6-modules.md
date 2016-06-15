# No ES6 Modules

### Technical Decision

Don't use `import ... from ...` syntax in favor of `const ... = require(...)`.

### TL;DR

When Babel compiles `import ... from ...` into `require(...)` and in the
process creates a bunch of extra variables and renames things. This makes
debugging in the browser really annoying, so we won't use the module syntax.

### Thinking

When you write the following code:

```js
import foo from 'bar';
```

Babel compiles it to this:

```js
'use strict';

var _bar = require('bar');

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
```

When you are using the `debugger` in the browser, you might try using `foo` in
the console, but you would be sad to find out that you're actually looking for
`_bar2.default`.

However, if you use the following code:

```js
const foo = require('bar');
```

It gets compiled to this:

```js
var foo = require('bar');
```

Which is much more sane to work with.

In the future, if we start using some tool that needs the module syntax, we can
[codemod](https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb#.90t1nqkgr)
most of it and manually fix up the rest. This should be fairly straightforward.
