# cf-ui Monorepo

### Technical Decision

Build our UI framework inside a monorepo using [Lerna](https://lernajs.io).

### TL;DR

Building npm packages across many individual repos make big changes difficult
to make, test, and publish. Using a monorepo we can solve many of these and
more issues.

### Thinking

Our UI framework takes advantage of npm in order to have independently
versioned packages for each component or utility so that they can be shared
across applications.

However, right now we build these packages in separate repos. This causes some
headaches:

- Setting up all the packages locally is a long process that takes up a ton of
  space because you install the same development tools 50 times.
- Working on changes that touch a bunch of different packages is difficult,
  `npm link`-ing them is a headache at best, and impossible at worst.
- Running tests across all packages means running each one individually which
  might as well be impossible.
- We don't have a good sense of code coverage across all packages.

Instead of having a bunch of separate repositories, we could copy what Babel
(and others) have done and use a monorepo using [Lerna](https://lernajs.io).

The repo would still just be a normal git repository, but with a `packages/`
directory that contains all of our components, utils, etc. that get built into
separate npm packages.

There's a bunch of benefits to this:

- Setting up a dev environment for every single package it now just 3 commands:
  `git clone`, `npm install`, and `npm run bootstrap`
- Cross-dependencies within the repo are automatically `npm link`'d between
  each other so that it's easier to dev on them.
- You can now make cross-dependency changes within a single commit/pull request
- You can run tests across all of the packages at once (note you can still test
  a single package with `npm test -- --package cf-component-button`)
- We only have to install the ~300 modules that make up the build system once
- We only have one build system for them all
- We can get a high level sense of code coverage across all packages

ONE MORE THING... (omg I'm basically Steve Jobs)

Since all of the repos have examples in them, I've adapted them into one giant
living example (styles pending):

![Examples](https://cloud.githubusercontent.com/assets/952783/15877704/5f78b1b0-2cca-11e6-8a5e-065b7f6a65d8.gif)

Eventually I'll set this up with our styles repo so that we can view our styles
in a living breathing style guide which is far less likely to go out of date
because it's directly tied to the packages.

**So what's the holdup?**

Lerna, the module we use to manage all of this, doesn't support independent
versioning (don't worry about what that means), but I got push access to the
repo and free reign to do whatever I want to, so I'm going to add this:
https://github.com/kittens/lerna/issues/20

Once, that's done, we'll be good. I'm already started on it:
https://github.com/kittens/lerna/pull/26
