import { createFakeServer } from 'cf-test-server';
import httpPoll from 'cf-util-http-poll';

test.skip('should poll until `isComplete` returns `true`', done => {
  const server = createFakeServer();

  function setupResponse(active) {
    server.respondWith(
      'GET',
      '/status',
      200,
      { 'Content-Type': 'application/json' },
      {
        active
      }
    );
    setTimeout(
      () => {
        server.respond();
      },
      5
    );
  }

  let count = 0;
  function queueNext() {
    count++;
    setupResponse(count === 2);
  }

  setupResponse(false);

  httpPoll('/status', {
    interval: 1,

    isComplete(res) {
      if (!res.body.active) queueNext();
      return res.body.active;
    },

    onComplete(res) {
      try {
        expect(res.body.active).toBeTruthy();
        expect(count).toBe(2);
        done();
      } catch (err) {
        done(err);
      }
    },

    onError(err) {
      done(err);
    }
  });
});
