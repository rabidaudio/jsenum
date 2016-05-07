# Enum

Simple string-backed enum construct for javascript.

## Example

```js
// actions.js
var Enum = require('enum');
module.exports new Enum('foo', 'bar', 'baz', 'fizz-buzz');

// main.js
var Actions = require('./actions');

Actions.FOO; // 'foo'
Actions.FIZZ_BUZZ; // 'fizz-buzz';
Actions.array().forEach(function(val){
  // ...
});

```