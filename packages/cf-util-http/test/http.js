import { createFakeServer } from 'cf-test-server';
import http from 'cf-util-http';

describe.skip('request', () => {
  test('should call the success handler on success', done => {
    const server = createFakeServer();

    server.respondWith(
      'DELETE',
      '/posts/3',
      200,
      { 'Content-Type': 'application/json' },
      {
        message: 'Hello World'
      }
    );

    http.request('DELETE', '/posts/3', null, (err, res) => {
      expect(res.status).toBe(200);
      expect(res.headers['content-type']).toBe('application/json');
      expect(res.body.message).toBe('Hello World');
      expect(err).toBe(null);
      done();
    });

    server.respond();
  });

  test('should call the error handler on error', done => {
    const server = createFakeServer();

    server.respondWith(
      'GET',
      '/missing',
      404,
      { 'Content-Type': 'application/json' },
      {
        message: 'Not Found'
      }
    );

    http.request('GET', '/missing', null, (err, res) => {
      expect(err.status).toBe(404);
      expect(err.headers['content-type']).toBe('application/json');
      expect(err.body.message).toBe('Not Found');
      expect(res).toBe(null);
      done();
    });

    server.respond();
  });
});

describe.skip('get', () => {
  test('should make a GET request', done => {
    const server = createFakeServer();

    server.respondWith(
      'GET',
      '/posts',
      200,
      { 'Content-Type': 'application/json' },
      [
        { id: 1, title: 'Post 1', content: 'Contents of Post 1' },
        { id: 2, title: 'Post 2', content: 'Contents of Post 2' }
      ]
    );

    http.get('/posts', null, (err, res) => {
      if (err) return done(err);
      expect(res.body[0].id).toBe(1);
      done();
    });

    server.respond();
  });
});

describe.skip('post', () => {
  test('should make a POST request', done => {
    const server = createFakeServer();

    server.respondWith(
      'POST',
      '/posts',
      200,
      { 'Content-Type': 'application/json' },
      {
        id: 3,
        title: 'Post 3',
        content: 'Contents of Post 3'
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

    server.respond();
  });
});

describe.skip('http.put', () => {
  test('should make a PUT request', done => {
    const server = createFakeServer();

    server.respondWith(
      'PUT',
      '/posts/3',
      200,
      { 'Content-Type': 'application/json' },
      {
        id: 3,
        title: 'Post 3',
        content: 'Contents of Post 3 (edit)'
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

    server.respond();
  });
});

describe.skip('http.patch', () => {
  test('should make a PATCH request', done => {
    const server = createFakeServer();

    server.respondWith(
      'PATCH',
      '/posts/3',
      200,
      { 'Content-Type': 'application/json' },
      {
        id: 3,
        title: 'Post 3',
        content: 'Contents of Post 3 (edit 2)'
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

    server.respond();
  });
});

describe.skip('http.del', () => {
  test('should make a DELETE request', done => {
    const server = createFakeServer();

    server.respondWith(
      'DELETE',
      '/posts/3',
      200,
      { 'Content-Type': 'application/json' },
      {
        id: 3,
        title: 'Post 3',
        content: 'Contents of Post 3'
      }
    );

    http.del('/posts/3', null, (err, res) => {
      if (err) return done(err);
      expect(res.body.content).toBe('Contents of Post 3');
      done();
    });

    server.respond();
  });
});
