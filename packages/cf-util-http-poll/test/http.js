import httpPoll from '../../cf-util-http-poll/src/index';

afterEach(() => fetch.mockClear());

test('should poll until `isComplete` returns `true`', done => {
  function setupResponse(active) {
    fetch.mockResponse(
      JSON.stringify({
        active
      }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 200
      }
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

test('should throw an error if options are incorrect', () => {
  expect(() => httpPoll('/foo')).toThrow('`poll` requires `isComplete`');
  expect(() => httpPoll('/foo', {})).toThrow('`poll` requires `isComplete`');
  expect(() => httpPoll('/foo', { isComplete: true })).toThrow(
    '`poll` requires `onComplete`'
  );
  expect(() =>
    httpPoll('/foo', { isComplete: true, onComplete: true })
  ).toThrow('`poll` requires `onError`');
});

test('should cancel when instructed to do so', () => {
  const onCancel = jest.fn();
  const cancel = httpPoll('/foo', {
    isComplete: true,
    onComplete: true,
    onError: true,
    onCancel
  });

  cancel();
  expect(onCancel).toHaveBeenCalled();
});

test('should call the onError callback when a error occurs', done => {
  fetch.mockResponse(
    JSON.stringify({
      error: true
    }),
    {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    }
  );

  httpPoll('/status', {
    isComplete: true,
    onComplete: true,
    onError: () => done()
  });
});
