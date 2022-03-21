
## 🦄 Vue Unicorn Log
-------

[![NPM_PACKAGE](https://img.shields.io/badge/NPM%20-Package-%23cb3837)](https://www.npmjs.com/package/vue-unicorn-log)

### A magical 🦄 plugin to make coloring the console output easier and more flexible.

Sometimes when building your application/site you don't want to see your linter complaining about using console functions. This helps to keep your linter happy so you can concentrate on the code better.

It also has the ability to run the console functions depending on environment variables so you can keep your production site's console quiet.

<br>

## Installation
 
```
npm i -D vue-unicorn-log
```

<br>

## Documentation & Examples
 
[Documentation & Examples](https://webdevnerdstuff.github.io/vue-unicorn-log/)

<br>

## Usage
 
```javascript
import Vue from 'vue';
import UnicornLog from 'vue-unicorn-log';

Vue.use(UnicornLog);
```

<br>

## Instance Methods
 
There are two instance methods available to use.
`$unicornLog`
`$uniLog`

<br>

## Console Methods
 
For a description of the different log methods, refer to the [Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/console) developer documentation for console.

<br>

## Examples

Basic
 
```javascript
this.$unicornLog({
  text : 'Hello World',
});
```

<br>

## Dependencies

Vue

<br>

## Change Log

[CHANGELOG](https://github.com/webdevnerdstuff/vue-unicorn-log/blob/master/CHANGELOG.md)

<br>

## License

Copyright (c) 2022 WebDevNerdStuff
Licensed under the MIT license.

[![@WebDevNerdStuff](https://img.shields.io/badge/github-webdevnerdstuff-brightgreen.svg)](https://github.com/webdevnerdstuff)
