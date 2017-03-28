import * as http from '../../cf-util-http/src/index';

afterEach(() => {
  fetch.mockClear();
  http.clearBeforeSend();
});

describe('beforeSend', () => {
  test('should be able to modify the provided input to request', done => {
    let response;

    http.beforeSend(opts => {
      opts.method = 'POST';
      opts.url = 'bar';
      opts.headers = opts.headers || {};
      opts.headers['baz'] = 'baz';
      const prevCallback = opts.callback;
      opts.callback = (err, res) => {
        response = res;
        prevCallback(err, res);
      };
      return opts;
    });

    fetch.mockResponse(
      JSON.stringify({
        message: 'yay'
      }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 200
      }
    );

    http.request(
      'GET',
      '/hell',
      { parameters: { a: '1', b: '&' } },
      (err, res) => {
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toBe('application/json');
        expect(fetch.mock.calls[0][0]).toBe('bar?a=1&b=%26');
        expect(fetch.mock.calls[0][1].method).toBe('POST');
        expect(response).toBe(res);
        expect(response.body.message).toBe('yay');
        done();
      }
    );
  });
});

describe('request', () => {
  test('should accept 3-args form where the opts is optional', done => {
    fetch.mockResponse('', {
      headers: { 'Content-Type': 'text/plain' },
      status: 200
    });

    http.request('/GET', '/somewhere', (err, res) => {
      expect(err).toBeUndefined();
      expect(res).toBeDefined();
      done();
    });
  });

  test('should call the success handler on success', done => {
    fetch.mockResponse(
      JSON.stringify({
        message: 'Hello World'
      }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 200
      }
    );

    http.request('DELETE', '/posts/3', undefined, (err, res) => {
      expect(res.status).toBe(200);
      expect(res.headers['content-type']).toBe('application/json');
      expect(err).toBeUndefined();
      expect(res.body.message).toBe('Hello World');
      done();
    });
  });

  test('should call the error handler on error', done => {
    fetch.mockResponse(
      JSON.stringify({
        message: 'Not Found'
      }),
      {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      }
    );

    http.request('GET', '/missing', undefined, (err, res) => {
      expect(err.status).toBe(404);
      expect(err.headers['content-type']).toBe('application/json');
      expect(res).toBeUndefined();
      expect(err.body.message).toBe('Not Found');
      done();
    });
  });
});

describe('get', () => {
  test('should make a GET request', done => {
    fetch.mockResponse(
      JSON.stringify([
        { id: 1, title: 'Post 1', content: 'Contents of Post 1' },
        { id: 2, title: 'Post 2', content: 'Contents of Post 2' }
      ]),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    http.get('/posts', undefined, (err, res) => {
      if (err) return done(err);
      expect(res.body[0].id).toBe(1);
      done();
    });
  });
});

describe('post', () => {
  test('should make a POST request', done => {
    fetch.mockResponse(
      JSON.stringify({
        id: 3,
        title: 'Post 3',
        content: 'Contents of Post 3'
      }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    http.post(
      '/posts',
      { body: { title: 'Post 3', content: 'Contents of Post 3' } },
      (err, res) => {
        if (err) return done(err);
        expect(res.body.id).toBe(3);
        done();
      }
    );
  });
});

describe('put', () => {
  test('should make a PUT request', done => {
    fetch.mockResponse(
      JSON.stringify({
        id: 3,
        title: 'Post 3',
        content: 'Contents of Post 3 (edit)'
      }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    http.put(
      '/posts/3',
      {
        body: { id: 3, title: 'Post 3', content: 'Contents of Post 3 (edit)' }
      },
      (err, res) => {
        if (err) return done(err);
        expect(res.body.content).toBe('Contents of Post 3 (edit)');
        done();
      }
    );
  });
});

describe('patch', () => {
  test('should make a PATCH request', done => {
    fetch.mockResponse(
      JSON.stringify({
        id: 3,
        title: 'Post 3',
        content: 'Contents of Post 3 (edit 2)'
      }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    http.patch(
      '/posts/3',
      { body: { content: 'Contents of Post 3 (edit 2)' } },
      (err, res) => {
        if (err) return done(err);
        expect(res.body.content).toBe('Contents of Post 3 (edit 2)');
        done();
      }
    );
  });
});

describe('del', () => {
  test('should make a DELETE request', done => {
    fetch.mockResponse(
      JSON.stringify({
        id: 3,
        title: 'Post 3',
        content: 'Contents of Post 3'
      }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    http.del('/posts/3', undefined, (err, res) => {
      if (err) return done(err);
      expect(res.body.content).toBe('Contents of Post 3');
      done();
    });
  });
});

describe('error', () => {
  test('should reject promise and return error in callback when malformed JSON returned', done => {
    fetch.mockResponse('{', {
      headers: { 'Content-Type': 'application/json' }
    });

    let error;
    http
      .get('/error', undefined, (err, res) => {
        expect(err instanceof SyntaxError).toBeTruthy();
        error = err;
      })
      .catch(err => {
        expect(err instanceof SyntaxError).toBeTruthy();
        expect(err).toBe(error);
        done();
      });
  });
});
