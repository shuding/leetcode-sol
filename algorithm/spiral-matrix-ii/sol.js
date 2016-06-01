/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var l = 0, r = n, t = 0, b = n;
    var m = [...Array(n)].map(u => []), d = 0, c = 0;
    
    while (l < r && t < b) {
        if (d == 0) {
            for (var i = l; i < r; ++i)
                m[t][i] = ++c;
            t++;
            d = 1;
        } else if (d == 1) {
            for (var i = t; i < b; ++i)
                m[i][r - 1] = ++c;
            r--;
            d = 2;
        } else if (d == 2) {
            for (var i = r - 1; i >= l; --i)
                m[b - 1][i] = ++c;
            b--;
            d = 3;
        } else if (d == 3) {
            for (var i = b - 1; i >= t; --i)
                m[i][l] = ++c;
            l++;
            d = 0;
        }
    }
    
    return m;
};
