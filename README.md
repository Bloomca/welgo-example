## Welgo Example Application

[![Build Status](https://travis-ci.org/Bloomca/welgo-example.svg?branch=master)](https://travis-ci.org/Bloomca/welgo-example)

This is an example application using [welgo library](https://github.com/Bloomca/welgo).
It is a simple Node.js application which shows [new HN stories](https://news.ycombinator.com/newest) using [official API](https://github.com/HackerNews/API).

The single difference is that instead of using traditional server-side templating languages here welgo is used, which provides [react-like components](./src/components/stories.js).

## Running

I used Node v11.6.0. You don't need to use this exact one, any recent version will work as well.

```sh
npm start # local development
npm test # run tests
```

## Tests

Tests are written using [Weltest](https://github.com/Bloomca/weltest) library.

You can see tests for:
- [Stories component](./src/components/__test__/stories.test.js)
- [NotFound page](./src/components/__test__/notFound.test.js)

## License

MIT
