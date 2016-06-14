# Plan for Abstraction

### Technical Decision

Start new things by doing them manually with enough consistency that it can be
later abstracted into factories/generators/automated processes.

### TL;DR

Trying to design abstractions that cover every use case is hard early on. Start
by doing things manually, searching for edge cases. Try to enforce as much
consistency as possible and do things in ways that abstractions can be written
for.

### Thinking

Applications need to make lots of API requests. Writing every single one out
with no abstractions is tedious. So clearly they need to be abstracted. Many
would be tempted to try and build this abstraction as step one, because as good
developers we can recognize where abstraction is necessary.

However, this is a bad practice. When you're starting something new, you have
no idea what are the requirements of an abstraction will be. Oftentimes you'll
build the wrong abstraction, or you start with an abstraction that doesn't
support what you need out of it.

Instead, make a note of something that needs abstraction and force yourself to
keep thinking about what that abstraction should be while you manually doing
things (even if they are highly repetitive). This might mean writing a whole
bunch of API requests out manually until you know in detail what they should
do.

As you do this you should also search for edge cases, write them down, and
mentally refactor your idea of what the abstraction should be. For example,
you might realize that while most API requests to update a resource use
`PATCH`, some other special-cased ones will use a `PUT`. How will you deal with
this in your abstraction?

Once you have covered enough ground and found a bunch of edge cases, then it is
time for abstraction. Maybe its a factory for generating API requests. Maybe
its models that have convenience methods. Whatever it is, you'll now have a
good amount of knowledge about the problem and you have a bunch of places you
can test your ideas out on.

However, be warned that failing to do a few things will cause a lot of pain:

1. Not taking note of requirements
2. Forgetting to abstract
3. Building things in a way that is not easy to abstract later on

If you don't do the above things, you'll be fine.
