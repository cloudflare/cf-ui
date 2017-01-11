// @flow

type Handler = (url: string) => mixed;

let handler: Handler | null = null;

function handleRoutes(callback: Handler): void {
  if (handler) {
    console.error('Warning: Route Handler: Only one handler is allowed at a time');
    return;
  }

  handler = callback;
}

function routeTo(url: string): void {
  if (!handler) {
    console.error('Warning: Route Handler: A handler needs to be setup before you can route');
    return;
  }

  handler(url);
}

function __resetRouteHandler(): void {
  handler = null;
}

module.exports = {handleRoutes, routeTo, __resetRouteHandler};
