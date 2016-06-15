# Wrapping External APIs

### Technical Decision

Wrap as many external APIs as possible.

### TL;DR

Wrapping APIs allows us to control breaking API changes, updating external
dependencies, or replacing them entirely without making breaking changes.

### Thinking

Right now we depend on a lot of external dependencies directly. For example, we
depend on [marked](https://github.com/chjj/marked).

However, what if marked made a breaking change? Or if we want to use another
markdown library? Now we need to go update everywhere we want to use markdown
in order to keep it up to date.

In addition to this, we also configure marked to do what we want in each
application that we use it. It would be good to keep that config in one place.

So instead of depending on it directly, let's instead wrap the api in our own
package: cf-util-markdown.

```js
const marked = require('marked');

marked.setOptions({
  // a bunch of options
});

exports.render = string => marked(string);
```

Now if marked ever changes its public API or we want to swap it our with a
different markdown library we don't have to worry about making a major version
bump because the public API isn't changing. We're also keeping the
configuration in one place.

This also forces us to expose the minimal API surface area. Many external
packages expose a much larger API than we generally need and if we lock that
down we won't have random APIs used in weird places. We can keep track of
everything.

The other interesting thing we can do is improve upon the APIs. For example, we
were able to add memoization to our markdown util without having to update its
usage anywhere in our application.

So we should do this for more things. Wrap APIs for the sake of wrapping APIs.
Protect ourselves from external change, and enable us to make improvements
easily.
