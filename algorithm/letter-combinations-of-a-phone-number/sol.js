/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    return digits.split('').reduce(function (res, current) {
        if (!res.length) res = [''];
        var ret = [];
        var st = 97 + (current - 2) * 3 + (+current > 7);
        var ed = (current == '7' || current == '9') + 3 + st;
        while (st < ed) {
            res.forEach(function (r) { ret.push(r + String.fromCharCode(st)); });
            ++st;
        }
        return ret;
    }, []);
};