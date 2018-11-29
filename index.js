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
function removeStrikethroughChars(str) {
    if (str && typeof str === 'string') return str.replace(regexStrikethroughChars, '');
    return str
}

/**
 * Remove strikethrough (short and long) of a string
 * @param {String} str - The string
 * @returns {String} The modified string
 */
function removeStrikethrough(str) {
    if (str && typeof str === 'string') return str.replace(regexStrikethrough, '');
    return str
}

/**
 * Get strikethrough chars of a string
 * @param {String} str - The string
 * @returns {Array} The price
 */
function getStrikethroughChars(str) {
    if (str && typeof str === 'string') {
        var result = str.match(regexStrikethroughChars);
        return result ? result : [];
    }
    return []
}

/**
 * Exports modules
 * @type {{removeStrikethroughChars: removeStrikethroughChars, removeStrikethrough: removeStrikethrough, getStrikethroughChars: getStrikethroughChars}}
 */
module.exports = {
    removeStrikethroughChars,
    removeStrikethrough,
    getStrikethroughChars
};

