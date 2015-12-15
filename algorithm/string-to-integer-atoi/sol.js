/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    while (isNaN(parseInt(str)) && str.length) str = str.slice(0, -1);
    return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648);
};
