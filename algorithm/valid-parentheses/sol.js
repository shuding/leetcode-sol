/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s = s.replace(/\(/g, "+(");
    s = s.replace(/\[/g, "+[");
    s = s.replace(/\{/g, "+{0:"); 
    s = s.replace(/\)/g, "+0)");
    s = s.replace(/\]/g, "+0]");
    s = s.replace(/\}/g, "+0}");
    try {
        eval(s);
    } catch(err) {
        return false;
    }
    return true;
};