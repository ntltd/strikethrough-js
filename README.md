# StrikethroughJS
Manipulate strikethrough chars in Javascript

[![npm version](https://badge.fury.io/js/strikethrough-js.svg)](https://badge.fury.io/js/strikethrough-js)

## Install
```npm
npm install @ntltd/strikethrough-js
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
