/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var ro = ["","I","II","III","IV","V","VI","VII","VIII","IX","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","M","MM","MMM"];
    var ret = 0, base = 0;
    while (s) {
        var l = s.length;
        var subs = s;
        while (ro.indexOf(subs) == -1) {
            --l;
            subs = s.substr(0, l);
        }
        s = s.substr(l);
        base--;
        ret *= 10;
        var cb = ~~(ro.indexOf(subs) / 10);
        while (base > cb) {
            ret *= 10;
            base--;
        }
        base = cb;
        ret += ro.indexOf(subs) % 10;
    }
    while (base > 0) ret *= 10, base--;
    return ret;
};