# cf-util-route-handler

> CloudFlare Route Handler Util

## Installation

```sh
$ npm install cf-util-route-handler
```

## Usage

```js
const {handleRoutes, routeTo} = require('cf-util-route-handler');
const Backbone = require('backbone');

// setup the router
handleRoutes(function(url) {
  Backbone.history.navigate(url, true);
});

// do all the world to make the router work normally
new Backbone.Router({
  routes: {
    ''    : () => console.log('/'),
    hello : () => console.log('/hello'),
    world : () => console.log('/world')
  }
});
Backbone.history.start();

// start routing
routeTo('/');
routeTo('/hello');
routeTo('/world');
```

A handler looks like this:

```js
handleRoutes(url => {
  takeActionWithUrl(url);
});
```

Only one handler is allowed to be setup.

`routeTo` is fire and forget, there's no callback for async transitions, and
it does not return anything.
