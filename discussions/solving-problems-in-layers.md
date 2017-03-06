# Solving problems in layers

### Technical Decision

Rather than solving problems from start to finish, build them in layers that
allows you to work to them incrementally.

### TL;DR

Trying to solve a massive problem all at once has never and will never work out
well. Finding ways to do them incrementally is important, and if you can layer
solutions on top of one another you can force yourself to break the problem
down.

### Thinking

Rebuilding our application in React and Redux we're going to have a lot of
opportunities to do things over.

Because we know what the end result is going to be, it is easy to have tunnel
vision and work all the way towards solving the problem end to end. However,
this is the biggest mistake you can make.

Instead we should always try to break things down into pieces, and these pieces
should be structured like layers. Like laying the foundation before you
construct the penthouse.

Each layer should be carefully considered and reviewed before moving on to the
next layer.

If you do this correctly, the end result is much much better than what you
would have come to if you solved everything at once.

##### Good Example

We needed a good way of building modals in React. If we tried building out one
giant modal component that we'd use directly and had no abstractions beneath
it, it would turn out horribly and we would hate our lives.

Instead we built these out in layers:

- [react-gateway](https://github.com/cloudflare/react-gateway)
- [react-modal2](https://github.com/cloudflare/react-modal2)
- [cf-component-modal](https://github.com/cloudflare/cf-ui/tree/master/packages/cf-component-modal)
- cf-builder-modal (Doesn't exist yet)

Each of these layers were carefully considered and make use of the one above
it. They all have well designed, useable APIs that are documented and can be
used by anyone.

Then as an additional benefit we were also able to open source two of these
layers as their own libraries that are being used outside of Cloudflare.

##### Bad Example

We need a good way of interacting with our API from our applications. We make
lots of requests and if we manually wrote each one it would be insanity. We
also want to be able to generate these from our API schemas which make use of
[JSON Schema](http://json-schema.org/).

We discussed building these in layers:

- Design a Redux state tree for our api that can host all the state we need
- Create Redux actions/reducers that create this state tree
- Abstract the repetition into factory functions that generate actions/reducers
- Auto-generate the calls to these factory functions using our JSON Schemas

If we had followed these steps we would have had multiple layers of
documentation and we would've been able to review everything in pieces rather
than one giant thing all at once.

Instead, what happened was that we made multiple attempts at solving the
problem end to end. All the way from auto-generation from JSON Schemas to the
final state tree.

The result was impossible to review properly, people were unfamiliar with how
it worked, we have little to no consensus on how it works, and it has taken
several sprints longer than we expected it to.

If we had carefully considered each layer, we would not have run into any of
these problems.
