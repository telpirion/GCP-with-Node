# Setting up tests

I should probably set up some tests because, you know, testing is a good idea.
One of the benefits of using a platform-agnostic web app framework like
Express is that I can use whatever testing tools are available for the
framework.

To test my server-side code, I'll use
[Mocha](https://mochajs.org/)
and
[SuperTest](https://github.com/visionmedia/supertest#readme)

## Add Mocha and Supertest as dependencies

I added the following dependencies to my [package.json](../project/package.json)
file:

```
{
  ...
  "devDependencies": {
    "mocha": "^6.2.0",
    "supertest": "^4.0.2"
  }
}
```

Of course, after I add these dependencies to my app I need to install the
modules.

```
npm install
```

## Create tests

For my first set of tests, I'm going to follow the lead of the official
[Node.js code samples for App Engine](https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/appengine/hello-world/flexible/test/app.test.js).

In `app.test.js`, I added the following code:

```
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
  // Other tests ...
});

```

## Run the tests

Since I added the [test](../project/test) folder to my scripts in the
`package.json` file, I need only run the following to execute my tests:

```
npm test
```

I run the scripts and all of my tests pass. Victory is mine!

## Next

With my tests in place, I want to start expanding my app a bit more. I love
working with Typescript and Angular,
[so I guess I'll add Angular to my app](angular.md).