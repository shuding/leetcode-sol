/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var s = '1';
    while (--n) {
        var t = '';
        var la = -1, cnt = 0;
        for (var i = 0; i < s.length; ++i) {
            if (s[i] == la) ++cnt;
            else { 
                if (la != -1) {
                    t += cnt;
                    t += la;
                }
                la = s[i];
                cnt = 1;
            }
        }
        t += cnt;
        t += la;
        s = t;
    }
    return s;
};
