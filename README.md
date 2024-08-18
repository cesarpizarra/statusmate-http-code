# HTTP Status Code

A package that provides human-readable descriptions and helper methods for HTTP status codes.

## Installation

    $ npm install --save statusmate-http

or you can use yarn

    $ yarn add statusmate-http

Import statusmate-http into your app

```js
import {
  getStatusDescription,
  isServerError,
  isClientError,
  isSuccess,
  isRedirection,
  isInformational,
} from 'statusmate-http';
```

#### Get status description

You can retrieve the human-readable description of an HTTP status code using `getStatusDescription`:

```js
const description = getStatusDescription(404); //Not Found
console.log(description);
```

#### Check if Status Code is a Server Error

You can check if a status code indicates a server error using `isServerError`:

```js
const isError = isServerError(500); // true
console.log(isError);
```

#### Check if Status Code is a Client Error

Similarly, you can check if a status code is a client error using `isClientError`:

```js
const isError = isClientError(404); // true
console.log(isError);
```

#### Check if Status Code Indicates Success

To check if a status code indicates a successful response:

```js
const isOk = isSuccess(200); // true
console.log(isOk);
```

#### Check if Status Code Indicates Redirection

To check if a status code indicates a redirection:

```js
const isRedirect = isRedirection(302); // true
console.log(isRedirect);
```

#### Check if Status Code is Informational

You can check if a status code is informational:

```js
const isInfo = isInformational(100); // true
console.log(isInfo);
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

- [Http Status Code](https://gist.github.com/UmairJibran/e4289a4e830b59b92bc4f3de82f3eab5)
