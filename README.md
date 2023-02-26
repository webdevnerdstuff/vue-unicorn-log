<p align="center" style="font-size: 100px">
  🦄
</p>

<p>
  <h1 align="center">Vue Unicorn Log</h1>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-unicorn-log">
    <img src="https://img.shields.io/npm/v/vue-unicorn-log?logo=npm" alt="NPM Package">
  </a>
  &nbsp;
  <a href="https://github.com/webdevnerdstuff/vue-unicorn-log">
    <img src="https://img.shields.io/badge/GitHub-WebDevNerdStuff-deeppink.svg?logo=github" alt="@WebDevNerdStuff">
  </a>
</p>


## Description

<p>
  <h3 align="center">A magical 🦄 plugin to make coloring the console output easier and more flexible.</h3>
</p>

Sometimes when building your application/site you don't want to see your linter complaining about using console functions. This helps to keep your linter happy so you can concentrate on writing bug free magical code.

It also has the ability to run the console functions depending on environment variables so you can keep your production site's console quiet.


## Installation
 
Using [pnpm](https://pnpm.io/):
```
pnpm add vue-unicorn-log
```
 
 Using npm:
```
npm i vue-unicorn-log
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

[Vue 2](https://v2.vuejs.org/)


## Change Log

[CHANGELOG](https://github.com/webdevnerdstuff/vue-unicorn-log/blob/master/CHANGELOG.md)


## License

Copyright (c) 2022 WebDevNerdStuff  
Licensed under the MIT license.

[LICENSE](https://github.com/webdevnerdstuff/vue-unicorn-log/blob/master/LICENSE.md)

[![@WebDevNerdStuff](https://img.shields.io/badge/github-webdevnerdstuff-brightgreen.svg)](https://github.com/webdevnerdstuff)

![Vue Unicorn Log by @WebDevNerdStuff](https://webdevnerdstuff.github.io/vue-unicorn-log/images/vue-unicorn-log-social.jpg)
