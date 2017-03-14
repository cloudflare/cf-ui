# cf-util-route-handler

> Cloudflare Route Handler Util

## Installation

```sh
$ npm install cf-util-route-handler
```

## Usage

```js
import {handleRoutes, routeTo} from 'cf-util-route-handler';
import Backbone from 'backbone';

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
