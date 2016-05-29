/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    p = p.replace(/\*+/g, '*');
    
    var f = [];
    
    var match = function (i, j) {
        if (i == s.length && j == p.length) return true;
        if (i == s.length) return (p[j] == '*' && j + 1 == p.length);
        if (j == p.length) return false;
        
        if (f[i] && f[i][j]) return f[i][j] > 0;
        
        if (s[i] == p[j] || p[j] == '?') {
            var _i = i, _j = j;
            while (i < s.length && j < p.length && (s[i] == p[j] || p[j] == '?')) {
                ++i; ++j;
            }
            if (!f[_i]) f[_i] = [];
            f[_i][_j] = match(i, j) ? 1 : -1;
            return f[_i][_j] > 0;
        }
        if (p[j] == '*') {
            for (var k = i; k <= s.length; ++k)
                if (match(k, j + 1)) {
                    if (!f[i]) f[i] = [];
                    f[i][j] = 1;
                    return true;
                }
        }
        if (!f[i]) f[i] = [];
        f[i][j] = 0;
        return false;
    };
    
    return match(0, 0);
};
