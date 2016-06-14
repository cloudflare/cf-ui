# Backbone to React

### Technical Decision

Backbone and Marionette aren't doing enough for us, we'll move to React + Redux.

### TL;DR

Our app is very complex and is only growing more complex. We need a framework
that helps us manage that complexity better than Backbone and Marionette have
been.

### Thinking

WWW is a very complicated front-end application, and the long term plans for it
are only going to make it more and more complicated.

Historically, Backbone and Marionette views have been the source of a lot of
developer confusion in our application. Tracking down what is happening when is
more of an art than a science.

Backbone and Marionette are not solving our complexity problem, they are
exacerbating it. In order to prepare ourselves for the future, we need to find
better ways of dealing with complexity. Both on the view layer and the business
logic layer.

React introduces an extremely strong pattern of composition that makes it easy
to abstract view complexity. It also focuses on defining small public
interfaces between components that makes things extremely consistent and easy
to refactor.

Redux introduces a consistent structure for business logic that grows linearly
with complexity and does a good job of breaking things into easy to test
chunks.

Both adopt a more functional style of programming that has well documented
benefits for building large codebases.

Another benefit of moving to React and Redux is the much larger community. It's
growing rapidly and has a large number of big companies behind it. Developers
are excited by it. This is also a good source for hiring.

Another big reason for React over other frameworks is that it has a really good
story for migrating applications incrementally. We don't have to stop all
product development in order to migrate everything.

This migration of our application is also an opportunity to reevaluate many of
the things we've built over several years. We can clean up our application a
lot.
