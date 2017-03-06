# ALL THE NPM PACKAGES!!!

### Technical Decision

Break our shared UI components into separate [npm](https://www.npmjs.com/)
packages.

### TL;DR

We have components and utilities that get shared across several repos,
publishing them as npm packages allows us to share the code easily, as well as
version them independently so apps can move at different speeds.

### Thinking

We have a bunch of separate JavaScript applications at Cloudflare both
internal and external.

Sharing code between all these applications is important– we don't want to
start every new application from scratch when we have an entire framework built
out.

However we also don't want to freeze development on one application because we
need to update our other applications because the shared code is changing.

What we want is a way to distribute shared code in a way that is versioned and
allows separate teams to move at separate speeds but also share responsibility.

Building the shared components and utils into separate
[npm](https://www.npmjs.com/) packages solves this problem for us. Each package
can be easily installed and versioned independently following
[semver](http://semver.org/).
