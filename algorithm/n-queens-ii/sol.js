/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let ans = 0;
    function put (i, col, l, r) {
        if (i == n) return ans++;
        let f = 1;
        for (let p = 0; p < n; ++p) {
            if ((f & col) == 0 &&
                ((1 << (n - p - 1 + i)) & l) == 0 &&
                ((f << i) & r) == 0) {
                    put(
                        i + 1, 
                        col + f, 
                        (1 << (n - p - 1 + i)) + l,
                        (f << i) + r
                    );
                }
            f <<= 1;
        }
    }
    put(0, 0, 0, 0);
    return ans;
};
