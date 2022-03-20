
vue-unicorn-log
-------

[![NPM_PACKAGE](https://img.shields.io/badge/NPM%20-Package-%23cb3837)](https://www.npmjs.com/package/vue-unicorn-log)

Desc TBD


### Installation


```
npm i -D vue-unicorn-log
```


### Demo

[https://webdevnerdstuff.github.io/vue-unicorn-log/inded.html](https://webdevnerdstuff.github.io/vue-unicorn-log/inded.html)

<br>

## Usage
 
```javascript
import Vue from 'vue';
import UnicornLog from 'vue-unicorn-log';

Vue.use(UnicornLog);
```
### Plugin Options
 
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Options</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top">defaultStyles</td>
      <td valign="top" style="color: #7b1fa2; font-weight: 500;">Object</td>
      <td valign="top"><code>{ log, info, goNuts }</code></td>
      <td valign="top">-</td>
      <td valign="top">-</td>
    </tr>
    <tr>
      <td valign="top">disabled</td>
      <td valign="top" style="color: #7b1fa2; font-weight: 500;">Boolean</td>
      <td valign="top" style="color: blue; font-weight: 400;">false</td>
      <td valign="top">-</td>
      <td valign="top">-</td>
    </tr>
    <tr>
      <td valign="top">logPrefix</td>
      <td valign="top" style="color: #7b1fa2; font-weight: 500;">Boolean | String</td>
      <td valign="top" style="color: blue; font-weight: 400;">false</td>
      <td valign="top"></td>
      <td valign="top"></td>
    </tr>
    <tr>
      <td valign="top">styles</td>
      <td valign="top" style="color: #7b1fa2; font-weight: 500;">String</td>
      <td valign="top">-</td>
      <td valign="top">-</td>
      <td valign="top">-</td>
    </tr>
    <tr>
      <td valign="top">type</td>
      <td valign="top" style="color: #7b1fa2; font-weight: 500;">String</td>
      <td valign="top">
        clear
        <br>
        count
        <br>
        countReset
        <br>
        countReset
        <br>
        debug
        <br>
        dir
        <br>
        error
        <br>
        group
        <br>
        groupCollapsed
        <br>
        groupEnd
        <br>
        info
        <br>
        log
        <br>
        table
        <br>
        time
        <br>
        timeEnd
        <br>
        timeLog
        <br>
        trace
        <br>
        warn
      </td>
      <td valign="top">-</td>
      <td valign="top">-</td>
    </tr>
  </tbody>
</table>

##### Overriding the plugin default options
 
```javascript
import Vue from 'vue';
import UnicornLog from 'vue-unicorn-log';

Vue.use(UnicornLog, {
  defaultStyles: {},
  disabled: true,
  logPrefix: '[Magical]',
  styles: '',
  type: 'info'
});

```

### Log Options
 
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Options</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top">array</td>
      <td valign="top" style="color: #7b1fa2; font-weight: 500;">Array</td>
      <td valign="top"><code>[]</code></td>
      <td valign="top">-</td>
      <td valign="top">-</td>
    </tr>
    <tr>
      <td valign="top">defaultStyles</td>
      <td valign="top" style="color: #7b1fa2; font-weight: 500;">Object</td>
      <td valign="top"><code>{ log, info, goNuts }</code></td>
      <td valign="top">-</td>
      <td valign="top">-</td>
    </tr>
    <tr>
      <td valign="top">disabled</td>
      <td valign="top" style="color: #7b1fa2; font-weight: 500;">Boolean</td>
      <td valign="top" style="color: blue; font-weight: 400;">false</td>
      <td valign="top">-</td>
      <td valign="top">-</td>
    </tr>
    <tr>
      <td valign="top">logPrefix</td>
      <td valign="top" style="color: #7b1fa2; font-weight: 500;">Boolean | String</td>
      <td valign="top" style="color: blue; font-weight: 400;">false</td>
      <td valign="top"></td>
      <td valign="top"></td>
    </tr>
    <tr>
      <td valign="top">magical</td>
      <td valign="top" style="color: #7b1fa2; font-weight: 500;">Boolean | String</td>
      <td valign="top" style="color: blue; font-weight: 400;">false</td>
      <td valign="top">xxx</td>
      <td valign="top">xxx</td>
    </tr>
    <tr>
      <td valign="top">name</td>
      <td valign="top" style="color: #7b1fa2; font-weight: 500;">String</td>
      <td valign="top">'UnicornLog'</td>
      <td valign="top">xxx</td>
      <td valign="top">xxx</td>
    </tr>
    <tr>
      <td valign="top">objects</td>
      <td valign="top" style="color: #7b1fa2; font-weight: 500;">Object</td>
      <td valign="top"><code>{}</code></td>
      <td valign="top">xxx</td>
      <td valign="top">xxx</td>
    </tr>
    <tr>
      <td valign="top">styles</td>
      <td valign="top" style="color: #7b1fa2; font-weight: 500;">String</td>
      <td valign="top">-</td>
      <td valign="top">-</td>
      <td valign="top">-</td>
    </tr>
    <tr>
      <td valign="top">text</td>
      <td valign="top" style="color: #7b1fa2; font-weight: 500;">String</td>
      <td valign="top">🌈🦄</td>
      <td valign="top">-</td>
      <td valign="top">-</td>
    </tr>
    <tr>
      <td valign="top">type</td>
      <td valign="top" style="color: #7b1fa2; font-weight: 500;">String</td>
      <td valign="top">
        clear
        <br>
        count
        <br>
        countReset
        <br>
        countReset
        <br>
        debug
        <br>
        dir
        <br>
        error
        <br>
        group
        <br>
        groupCollapsed
        <br>
        groupEnd
        <br>
        info
        <br>
        log
        <br>
        table
        <br>
        time
        <br>
        timeEnd
        <br>
        timeLog
        <br>
        trace
        <br>
        warn
      </td>
      <td valign="top">-</td>
      <td valign="top">-</td>
    </tr>
  </tbody>
</table>

### Instance Methods
 
There are two instance methods available to use.
`$unicornLog`
`$uniLog`

### Console Methods
 
  For a description of the different log methods, refer to the [Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/console) developer documentation for console.

## Examples

Basic
 
```javascript
this.$unicornLog({
  text : 'Hello World',
});
```

TBD:
```javascript
this.$unicornLog({
  text : 'Hello World',
  logPrefix: true,
  magical: 'rainbow',
  type: 'log',
});
 ```

## Dependencies

Vue

<br>

## Change Log

[CHANGELOG](https://github.com/webdevnerdstuff/vue-unicorn-log/blob/master/CHANGELOG.md)

<br>

## License

Copyright (c) 2020 WebDevNerdStuff
Licensed under the MIT license.

[![@WebDevNerdStuff](https://img.shields.io/badge/github-webdevnerdstuff-brightgreen.svg)](https://github.com/webdevnerdstuff)
