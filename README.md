# StrikethroughJS
Manipulate plain text strikethrough chars in Javascript.

[![npm version](https://badge.fury.io/js/strikethrough-js.svg)](https://badge.fury.io/js/strikethrough-js)

## Why?
> Strikethrough is represented by words with a horizontal line through their center. It implies that the text is wrong and was recently deleted or marked as such. Unlike the HTML s tag, this strikethrough text will work when you copy paste it in to another location. That’s because the strikethrough characters generated by this tool are in plain text. - [Saijo George](https://saijogeorge.com/strikethrough-text-generator/)

This library allows you to get rid of this because some fonts doesn't support strikethrough. You will be able to apply strikethrough another way (e.g., in CSS: `text-decoration: line-through;`)

## Install
```npm
npm i strikethrough-js
```

## Usage
### Remove strikethrough
```javascript
var str = removeStrikethrough('1̶2̶3̶7̶8̶9̶€̶');
console.log(str);
// 123789€
```

### Remove strikethrough chars
```javascript
var str = removeStrikethroughChars('456€ 1̶2̶3̶7̶8̶9̶€̶');
console.log(str);
// 456€ 
```

### Get strikethrough chars
```javascript
var str = getStrikethroughChars('456€ (1̶2̶3̶7̶8̶9̶€̶)');
console.log(str);
// ["1̶", "2̶", "3̶", "7̶", "8̶", "9̶", "€̶"]
```

### Get remove strikethrough chars
```javascript
var str = getRemoveStrikethroughChars('456€ (1̶2̶3̶7̶8̶9̶€̶)');
console.log(str);
// ["1", "2", "3", "7", "8", "9", "€"]
```
## Testing
```npm
npm t
```
Will use [Jest](https://jestjs.io/) test suites.
