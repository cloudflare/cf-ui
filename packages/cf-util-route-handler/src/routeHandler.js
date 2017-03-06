let handler;

export function handleRoutes(callback) {
  if (handler) {
    console.error(
      'Warning: Route Handler: Only one handler is allowed at a time'
    );
    return;
  }

  handler = callback;
}

export function routeTo(url) {
  if (!handler) {
    console.error(
      'Warning: Route Handler: A handler needs to be setup before you can route'
    );
    return;
  }

  handler(url);
}

export function __resetRouteHandler() {
  handler = null;
}
