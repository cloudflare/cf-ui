import httpPoll from '../../cf-util-http-poll/src/index';

afterEach(() => fetch.mockClear());

test('should poll until `isComplete` returns `true`', done => {
  function setupResponse(active) {
    setTimeout(
      () => {
        fetch.mochResponse(
          JSON.stringify({
            active
          }),
          {
            headers: { 'Content-Type': 'application/json' },
            status: 200
          }
        );
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
