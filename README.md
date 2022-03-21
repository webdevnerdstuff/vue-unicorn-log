
# 🦄 Vue Unicorn Log


[![NPM_PACKAGE](https://img.shields.io/badge/NPM%20-Package-%23cb3837)](https://www.npmjs.com/package/vue-unicorn-log)

### A magical 🦄 plugin to make coloring the console output easier and more flexible.

Sometimes when building your application/site you don't want to see your linter complaining about using console functions. This helps to keep your linter happy so you can concentrate on writing bug free magical code.

It also has the ability to run the console functions depending on environment variables so you can keep your production site's console quiet.


## Installation
 
```
npm i -D vue-unicorn-log
```


## Documentation & Examples
 
[Documentation & Examples](https://webdevnerdstuff.github.io/vue-unicorn-log/)


## Usage
 
```javascript
import Vue from 'vue';
import UnicornLog from 'vue-unicorn-log';

Vue.use(UnicornLog);
```


## Instance Methods
 
There are two instance methods available to use.
`$unicornLog`
`$uniLog`


## Console Methods
 
For a description of the different log methods, refer to the [Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/console) developer documentation for console.


## Simple Example
 
```javascript
this.$unicornLog({
  text: 'Hello World',
});
```

For more examples, see [Documentation & Examples](https://webdevnerdstuff.github.io/vue-unicorn-log/).


## Dependencies

Vue


## Change Log

[CHANGELOG](https://github.com/webdevnerdstuff/vue-unicorn-log/blob/master/CHANGELOG.md)


## License

Copyright (c) 2022 WebDevNerdStuff
Licensed under the MIT license.

[LICENSE](https://github.com/webdevnerdstuff/vue-unicorn-log/blob/master/LICENSE.md)

[![@WebDevNerdStuff](https://img.shields.io/badge/github-webdevnerdstuff-brightgreen.svg)](https://github.com/webdevnerdstuff)
