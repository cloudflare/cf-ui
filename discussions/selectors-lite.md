# Selectors Lite™

### Technical Decision

Create a "selectors" directory to abstract away remaining logic inside
components/containers. "Selectors" is defined as any getter function.

### TL;DR

Redux actions and reducers abstract away 90% of the logic that would otherwise
live inside components, making it extremely easy to test and refactor. The
remaining 10% is largely state lookups and filters, we will call these getter
functions "selectors" (stealing the name from reselect) and use them to make
our components dumber.

### Thinking

The decision to use redux has means the abstraction of state into actions and
reducers is highly testable and our components are very dumb. At this point the
only remaining piece of logic inside components is things like this:

```js
<div>state.zones.all[state.zones.current].name</div>
```

Or a filter like this:

```js
<ul>
  {state.zones.all.filter(zone => zone.isPartnerHosted).map(zone =>
    <li>{zone.name}</li>
  )}
</ul>
```

If we instead wrote `getCurrentZone()` and `filterPartnerHostedZones()`
functions then we would remove the remaining non-rendering logic. Writing them
like this:

```js
<div>{getCurrentZone(state)}</div>
```

```js
<ul>
  {filterPartnerHostedZones(state).map(zone =>
    <li>{zone.name}</li>
  )}
</ul>
```

We will call these functions "selectors", borrowing from the popular
[reselect](https://github.com/reactjs/reselect) library. However, we will
define selectors as any function that gets a piece of state and returns a
value. They don't necessarily need to be memoized.

> For many of our selectors, memoization will be unnecessary and will actually
> be slower.

Selectors should also be built with composition.

```js
function getZones(state) {
  return state.zones;
}

function getCurrentZone(state) {
  const zones = getZones(state);
  return zones.all[zones.current];
}

function filterPartnerHostedZones(state) {
  return getZones(state).all.filter(zone => zone.isPartnerHosted);
}
```

Because these selectors are just more plain functions they are simple to unit
test.

If we ever want to memoize a selector we could apply that as well. Just note
that memoized functions should only accept one argument, and this is how you
would write them if you need multiple:

```js
const memoize = require('lodash.memoize');

const memoizedGetZoneById = memoize(state => memoize(id => {
  return getZones(state).all[id];
}));
```
