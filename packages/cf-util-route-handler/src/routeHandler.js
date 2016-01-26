let handler;

export function handleRoutes(callback) {
  if (handler) {
    throw new Error('Only one handler is allowed at a time');
  }

  handler = callback;
}

export function routeTo(url) {
  if (!handler) {
    throw new Error('A handler needs to be setup before you can route');
  }

  handler(url);
}

export function __resetRouteHandler() {
  handler = null;
}
