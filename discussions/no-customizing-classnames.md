# No Customizing `className`'s

### Technical Decision

In our shared components, we should avoid ever exposing `className` as a prop
that can be passed in.

### TL;DR

Allowing `className` (and similar properties) to be passed into views means
we're allowing outside concerns to leak into our components. Instead we should
carefully defining a set of props that can be passed in to configure our
components.

### Thinking

Backbone views allow anything to be customized at anytime, and as a result we
often have done just that. We modify classes, templates, tags, events, `ui`,
and all sorts of methods.

Basically Backbone makes everything about every view a part of the public
interface at all times.

The result of this is that it is really really really really really really
really really really really really really really really really really really
really really really really really really really really really really really
really really really really hard to make changes to views that get extended.

React does the opposite, you have to explicitly define what you want your
public interface to be, and if something changes you get really helpful error
messages about what went wrong.

This makes refactoring really easy, and makes us consider every change we're
making to our components carefully.

So why would we undo all of that by allowing properties like `className` to be
passed in and allow you to do whatever you want whenever you want to.

Instead of doing something like:

```js
<Button className="btn overview-page-wide-button">Click Me</Button>
```

Which has its own styles that live in some random file and will break if we
modify how they get applied to the button component.

Instead we could do something as simple as this:

```js
<Button wide>Click Me</Button>
```

This makes the button concerned about the different ways its being used.

If this causes our components to have a crazy number of props that can be
passed in, that should signal to us that we have really inconsistent uses of
components in our application (Time to have a chat with the designers ;P).
