<div align="center">
    <img src="https://i.imgur.com/5260wcO.gif" width="400" alt="strikethrough-js" />
</div>
<br />
<p align="center">Manipulate plain text strikethrough chars in Javascript</p>
<p align="center">
    <a href="https://badge.fury.io/js/strikethrough-js"><img src="https://badge.fury.io/js/strikethrough-js.svg" alt="npm version" height="20"></a>
</p>

## Why?
> Strikethrough is represented by words with a horizontal line through their center. It implies that the text is wrong and was recently deleted or marked as such. Unlike the HTML's tag, strikethrough text will work when you copy-paste it in to another location. That’s because the strikethrough characters [...] are in plain text. - [Saijo George](https://saijogeorge.com/strikethrough-text-generator/)

This library allows you to get rid of this because some fonts doesn't support strikethrough. You will be able to apply strikethrough another way (e.g., in CSS: `text-decoration: line-through;`)

## Install
```sh
npm i strikethrough-js
```

## Usage
```javascript
// Javascript
var lib = require('strikethrough-js');
var res = lib.removeStrikethrough('...');

// ES5-6
import * as lib from 'strikethrough-js';
const res = lib.removeStrikethrough('...');
```

### Remove strikethrough
```javascript
const str = removeStrikethrough('1̶2̶3̶7̶8̶9̶€̶');
console.log(str);
// 123789€
```

### Remove strikethrough chars
```javascript
const str = removeStrikethroughChars('456€ 1̶2̶3̶7̶8̶9̶€̶');
console.log(str);
// 456€ 
```

### Get strikethrough chars
```javascript
const str = getStrikethroughChars('456€ (1̶2̶3̶7̶8̶9̶€̶)');
console.log(str);
// ["1̶", "2̶", "3̶", "7̶", "8̶", "9̶", "€̶"]
```

### Get strikethrough string
```javascript
const str = getStrikethroughString('456€ (1̶2̶3̶7̶8̶9̶€̶)');
console.log(str);
// 1̶2̶3̶7̶8̶9̶€̶
```

### Get chars
```javascript
const str = getChars('456€ (1̶2̶3̶7̶8̶9̶€̶)');
console.log(str);
// ["1", "2", "3", "7", "8", "9", "€"]
```

### Get string
```javascript
const str = getString('456€ (1̶2̶3̶7̶8̶9̶€̶)');
console.log(str);
// 123789€
```

## Develop
### Library
Since this `lib` is pretty light, there is no need for a sophisticated bundler (like Webpack or Rollup). The core `lib` is bundled with bare bones [NodeJS](https://nodejs.org/en/) and [Babel](https://babeljs.io/).
 
### Tests
```npm
npm t
```
Will use [Jest](https://jestjs.io/) test suites and [pre-commit](https://pre-commit.com/) hook.
