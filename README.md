<div align="center">
    <img src="https://i.imgur.com/5260wcO.gif" width="100%" alt="strikethrough-js" />
</div>
<br />
<p align="center">Manipulate plain text strikethrough chars in Javascript</p>
<p align="center">
    <a href="https://badge.fury.io/js/strikethrough-js"><img src="https://badge.fury.io/js/strikethrough-js.svg" alt="npm version" height="20"></a>
</p>

## Why?
This library aims to help you **manipulate strikethrough characters** in strings.

### What is strikethrough text?
> Strikethrough is represented by words with a horizontal line through their center. It implies that the text is wrong and was recently deleted or marked as such. Unlike the HTML's tag, strikethrough text will work when you copy-paste it in to another location. That’s because the strikethrough characters [...] are in plain text. - [Saijo George](https://saijogeorge.com/strikethrough-text-generator/)

### An example
It can be useful when some fonts don't support strikethrough text. Using this, you will be able to use regular text and then apply strikethrough another way (e.g., in CSS: `text-decoration: line-through;`).

## Get started
### Install
```sh
npm install strikethrough-js
```

### Use
```javascript
// Common
var strikethrough = require('strikethrough-js');
var res = strikethrough.removeStrikethrough('m̶y̶T̶e̶x̶t̶');

// ES5/6
import { removeStrikethrough } from 'strikethrough-js';
const res = removeStrikethrough('m̶y̶T̶e̶x̶t̶');
```

## Utils
### `removeStrikethrough`
Returns an equivalent `string` of regular text:
```javascript
const str = removeStrikethrough('Price was 1̶2̶3̶7̶8̶9̶€̶');
// Price was 123789€
```

### `removeStrikethroughChars`
Returns a `string ` without strikethrough text:
```javascript
const str = removeStrikethroughChars('456€ 1̶2̶3̶7̶8̶9̶€̶');
// 456€ 
```

### `getStrikethroughChars`
Returns a `string[]` of the strikethrough characters:
```javascript
const str = getStrikethroughChars('456€ (1̶2̶3̶7̶8̶9̶€̶)');
// ["1̶", "2̶", "3̶", "7̶", "8̶", "9̶", "€̶"]
```

### `getStrikethroughString`
Returns a `string` of the strikethrough text:
```javascript
const str = getStrikethroughString('456€ (1̶2̶3̶7̶8̶9̶€̶)');
// 1̶2̶3̶7̶8̶9̶€̶
```

### `getChars`
Returns an equivalent `string[]` of the strikethrough characters:
```javascript
const str = getChars('456€ (1̶2̶3̶7̶8̶9̶€̶)');
// ["1", "2", "3", "7", "8", "9", "€"]
```

### `getString`
Returns an equivalent `string` of the strikethrough characters:
```javascript
const str = getString('456€ (1̶2̶3̶7̶8̶9̶€̶)');
// 123789€
```

## Contribute
### Library
Since this `lib` is pretty light, there is no need for a sophisticated bundler (like Webpack or Rollup). The core `lib` is bundled with bare-bones [NodeJS](https://nodejs.org/en/) and [Babel](https://babeljs.io/).
 
### Tests
```npm
npm test
```
Will run [Jest](https://jestjs.io/) test suites. It will be also triggered by [Husky](https://github.com/typicode/husky) git hooks.
