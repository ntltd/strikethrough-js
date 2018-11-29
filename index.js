/**
 * Strikethrough chars (short and long)
 * @type {RegExp}
 */
var regexStrikethroughChars = /\w̵|\w̶|\W̵|\W̶|̵|̶/g;

/**
 * Strikethrough symbols (short and long)
 * @type {RegExp}
 */
var regexStrikethrough = /[̵̶]/g;

/**
 * Remove strikethrough chars (short and long) of a string
 * @param {String} str - The string
 * @returns {String} The modified string
 */
module.exports = function removeStrikethroughChars(str) {
    if (str && typeof str === 'string') return str.replace(regexStrikethroughChars, '');
    return str
};

/**
 * Remove strikethrough (short and long) of a string
 * @param {String} str - The string
 * @returns {String} The modified string
 */
module.exports = function removeStrikethrough(str) {
    if (str && typeof str === 'string') return str.replace(regexStrikethrough, '');
    return str
};

/**
 * Get strikethrough chars of a string
 * @param {String} str - The string
 * @returns {Array} The price
 */
module.exports = function getStrikethroughChars(str) {
    if (str && typeof str === 'string') return str.match(regexStrikethroughChars);
    return []
};
