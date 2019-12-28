const app = require('../app');

const request = require('supertest');

describe('Node.js server', () => {
  describe('sends GET request to /hello', () => {
    it('should get 200', result => {
      request(app)
        .get('/hello')
        .expect(200, result);
    });

    it('should get Hello World', result => {
      request(app)
        .get('/hello')
        .expect('Hello, world!', result);
    });
  })
  describe('sends GET request to /', () => {
    it('should get 200', result => {
      request(app)
        .get('/hello')
        .expect(200, result);
    });
  });
});