import {fakeServer} from 'sinon';

function createFakeServer() {
  let server = fakeServer.create();

  return {
    respondWith(method, url, status, headers, body) {
      server.respondWith(method, url, [status, headers, JSON.stringify(body)]);
    },
    respond() {
      server.respond();
    },
    destroy() {
      server.restore();
      server = null;
    }
  };
}

module.exports = createFakeServer;
