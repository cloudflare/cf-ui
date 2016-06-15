# Broken Promises

### Technical Decision

Eliminate all promises from application.

### TL;DR

The Promise API is the source of many confusing errors in our application,
using node style callbacks eliminates the issue without reducing code quality.

### Thinking

The typical complaint about promises is how they swallow exceptions by default
and errors go unnoticed if you don't add a `.catch` handler. There are existing
solutions for this so it's a non-issue.

However our reasoning for this goes much deeper than just swallowed exceptions.
It has to do with promises having unpredictable code paths on errors.

To explain, let's take a bit of a code journey.

```js
Promise.resolve().then(() => {
  // whole bunch of logic...
  return fetch('/api/endpoint');
}).then(res => {
  // handle request success...
}).catch(err => {
  // handle request failure...
});
```

Notice in the above code how we're attempting to handle the api response in the
promise chain, handling both the success case and the error case.

However, what this code is ignoring is that the api request is not the only
source of errors. In fact, there are a number of places in the code that could
have caused an error. It could have been the "whole bunch of logic" or even the
success handler.

The logic in both of these places could include hundreds or even thousands of
lines of code as it could call out to other APIs across many different files,
and very often it does just that.

The dangerous assumption of promises is that it assumes every error is expected
and ignores that most errors are developer mistakes. The end result to users is
often that the UI renders something like a warning about an API error when no
such API error occurred.

You might be thinking: "Oh but you can just write the promise handling
differently." So let's explore alternatives.

```js
Promise.resolve().then(() => {
  // whole bunch of logic...
  return fetch('/api/endpoint').catch(err => {
    // handle request success...
  });
}).catch(err => {
  // handle developer errors...
});
```

Here we're separating the api errors from the developer errors. However, now we
must think about where to handle the API response.

```js
Promise.resolve().then(() => {
  // whole bunch of logic...
  return fetch('/api/endpoint').then(res => {
    // handle request success...
  }).catch(err => {
    // handle request failure...
  });
}).catch(err => {
  // handle developer errors...
});
```

But then you have the same problem as before of also catching developer errors.
Again, the success case could be reaching out and rendering massive UIs with a
ton of logic that could go wrong.

Maybe flip them?

```js
Promise.resolve().then(() => {
  // whole bunch of logic...
  return fetch('/api/endpoint').catch(err => {
    // handle request failure...
  }).then(res => {
    // handle request success...
  });
}).catch(err => {
  // handle developer errors...
});
```

But now this is even worse because now the `.catch` is catching the error and
moving on to the success handler.

You could re-throw the error. But then you are bubbling back up to another
error handler or the global uncaught exception handler.

You would actually want to write it like this:

```js
Promise.resolve().then(() => {
  // whole bunch of logic...
  return fetch('/api/endpoint').then(res => {
    // handle request success...
  }, err => {
    // handle request failure...
  });
});
```

Here we are handling the request success and error cases in the same spot
without causing other weird code paths to be run.

What's hilarious is that there are a number of articles online that say using
`.then` with two callbacks instead of `.then` and `.catch` is a bad practice
and should be avoided.

Also, look at the above code again. How is it any different than this:

```js
request('/api/endpoint', (err, res) => {
  if (err) {
    // handle request failure...
  } else {
    // handle request success...
  }
});
```

This code is/has:

- Less bytes
- Better stack traces
- More performant (on a micro-optimization scale)
- Just as easy to read

### Closing

If you pay close attention to the bugs that get reported in our app, there are
two things that are a constant source of errors:

- Things that could be solved by a type system
- Things that go unnoticed because promises are doing weird stuff

The good news is that promises aren't necessary. They don't solve any
problems that aren't already solved. They're just a source of new issues.
