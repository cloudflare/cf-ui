const { equal: assertEqual } = require('assert');
const { createFakeServer } = require('cf-test-server');
const httpPoll = require('../src/httpPoll');

describe('httpPoll', function() {
  it('should poll until `isComplete` returns `true`', function(done) {
    const server = createFakeServer();

    this.timeout(10000);

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
          assertEqual(res.body.active, true);
          assertEqual(count, 2);
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
});
