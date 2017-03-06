import { fakeServer } from 'sinon';

let server = null;

afterEach(() => {
  teardownServer();
});

function initServer() {
  if (server) return server;
  server = fakeServer.create();
  return server;
}

function getServer() {
  if (!server)
    throw new Error(
      'Fake servers cannot be reused after the test that created them'
    );
  return server;
}

function teardownServer() {
  if (!server) return;
  server.restore();
  server = null;
}

function createFakeServer() {
  initServer();

  return {
    respondWith(method, url, status, headers, body) {
      getServer().respondWith(method, url, [
        status,
        headers,
        JSON.stringify(body)
      ]);
    },
    respond() {
      getServer().respond();
    },
    destroy() {
      teardownServer();
    }
  };
}

export default createFakeServer;
