import * as regexp from './regular-expressions'

/**
 * Remove strikethrough chars (short and long) of a string
 * @param {String} str - The string
 * @returns {String} The modified string
 */
export const removeStrikethroughChars = (str) => {
  if (str && typeof str === 'string') {
    return str.replace(regexp.regexStrikethroughChars, '')
  }
  return str
}

/**
 * Remove strikethrough (short and long) of a string
 * @param {String} str - The string
 * @returns {String} The modified string
 */
export const removeStrikethrough = (str) => {
  if (str && typeof str === 'string') {
    return str.replace(regexp.regexStrikethrough, '')
  }
  return str
}

/**
 * Get strikethrough chars of a string
 * @param {String} str - The string
 * @returns {Array} The price
 */
export const getStrikethroughChars = (str) => {
  if (str && typeof str === 'string') {
    return str.match(regexp.regexStrikethroughChars) || []
  }
  return []
}

/**
 * Get strikethrough string of a string
 * @param {String} str - The string
 * @returns {String} The price
 */
export const getStrikethroughString = (str) => {
  const arr = getStrikethroughChars(str)
  return arr.join('')
}

/**
 * Get chars removing strikethrough of a string
 * @param {String} str - The string
 * @returns {Array} The price
 */
export const getChars = (str) => {
  const strikethroughChars = getStrikethroughChars(str)
  if (strikethroughChars.length > 0) {
    return strikethroughChars.map((char) => {
      return removeStrikethrough(char)
    })
  }
  return []
}

/**
 * Get strikethrough string of a string
 * @param {String} str - The string
 * @returns {String} The price
 */
export const getString = (str) => {
  const arr = getChars(str)
  return arr.join('')
}
