// @flow

declare var beforeEach: () => void;
declare var afterEach: () => void;

const {fakeServer} = require('sinon');

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
  if (!server) throw new Error('Fake servers cannot be reused after the test that created them');
  return server;
}

function teardownServer() {
  if (!server) return;
  server.restore();
  server = null;
}

type Headers = { [header: string]: string };
type Json =
  | string
  | number
  | boolean
  | null
  | Array<Json>
  | { [key: string]: Json };

function createFakeServer() {
  initServer();

  return {
    respondWith(method: string, url: string, status: number, headers: Headers, body: Json) {
      getServer().respondWith(method, url, [status, headers, JSON.stringify(body)]);
    },
    respond() {
      getServer().respond();
    },
    destroy() {
      teardownServer();
    }
  };
}

module.exports = createFakeServer;
