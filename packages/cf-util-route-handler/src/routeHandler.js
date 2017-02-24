let handler;

function handleRoutes(callback) {
  if (handler) {
    console.error(
      'Warning: Route Handler: Only one handler is allowed at a time'
    );
    return;
  }

  handler = callback;
}

function routeTo(url) {
  if (!handler) {
    console.error(
      'Warning: Route Handler: A handler needs to be setup before you can route'
    );
    return;
  }

  handler(url);
}

function __resetRouteHandler() {
  handler = null;
}

module.exports = { handleRoutes, routeTo, __resetRouteHandler };
