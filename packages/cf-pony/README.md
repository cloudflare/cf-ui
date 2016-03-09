# cf-pony

> CloudFlare [ponyfills](https://ponyfoo.com/articles/polyfills-or-ponyfills)

We are wrapping other modules so that we can deprecate them in the future with
`console.warn` warnings. We can also swap out implementations easily.

## Installation

```sh
$ npm install cf-pony
```

## Usage

#### `Array.isArray`

Use the native method.

```js
Array.isArray(arr);
```

#### `Array.prototype.every`

Use the native method.

```js
arr.every(function() {
  // ...
});
```

#### `Array.prototype.filter`

Use the native method.

```js
arr.filter(function() {
  // ...
});
```

#### `Array.prototype.find`

Use the native method.

```js
arr.find(function() {
  // ...
});
```

#### `Array.prototype.forEach`

Use the native method.

```js
arr.forEach(function() {
  // ...
});
```

#### `Array.prototype.includes` => `cf.arrayIncludes`

Use the ponyfill from this module.

```js
var cf = require('cf-pony');
cf.arrayIncludes(arr, 'item');
```

#### `Array.prototype.map`

Use the native method.

```js
arr.map(function() {
  // ...
});
```

#### `Array.prototype.reduce`

Use the native method.

```js
arr.reduce(function() {
  // ...
});
```

#### `Array.prototype.some`

Use the native method.

```js
arr.some(function() {
  // ...
});
```

#### `Object.assign` => `cf.objectAssign`

Use the ponyfill from this module.

```js
var cf = require('cf-pony');
cf.objectAssign(obj, obj2);
```

#### `Object.create`

Use the native method.

```js
Object.create(obj);
```

#### `Object.is` => `cf.objectIs`

Use the ponyfill from this module.

```js
var cf = require('cf-pony');
cf.objectIs(obj, val);
```

#### `Object.keys`

Use the native method.

```js
Object.keys(obj);
```

#### `Object.prototype.hasOwnProperty`

Use the native method.

```js
obj.hasOwnProperty('prop');
```

#### `String.prototype.endsWith` => `cf.stringEndsWith`

Use the ponyfill from this module.

```js
var cf = require('cf-pony');
cf.stringEndsWith(str, 'string');
```

#### `String.prototype.includes` => `cf.stringIncludes`

Use the ponyfill from this module.

```js
var cf = require('cf-pony');
cf.stringIncludes(str, 'string');
```

#### `String.prototype.startsWith` => `cf.stringStartsWith`

Use the ponyfill from this module.

```js
var cf = require('cf-pony');
cf.stringStartsWith(str, 'string');
```

#### `String.prototype.trim` => `cf.stringTrim`

Use the ponyfill from this module.

```js
var cf = require('cf-pony');
cf.stringTrim(str);
```

#### `String.prototype.trimLeft` => `cf.stringTrimLeft`

Use the ponyfill from this module.

```js
var cf = require('cf-pony');
cf.stringTrimLeft(str);
```

#### `String.prototype.trimRight` => `cf.stringTrimRight`

Use the ponyfill from this module.

```js
var cf = require('cf-pony');
cf.stringTrimRight(str);
```
