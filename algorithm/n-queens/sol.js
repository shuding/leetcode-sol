/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let ans = [];
    let sov = [];
    function put (i, col, l, r) {
        if (i == n) return ans.push([...sov]);
        let f = 1;
        for (let p = 0; p < n; ++p) {
            if ((f & col) == 0 &&
                ((1 << (n - p - 1 + i)) & l) == 0 &&
                ((f << i) & r) == 0) {
            		sov.push('.'.repeat(p) + 'Q' + '.'.repeat(n - p - 1));
                    put(
                        i + 1, 
                        col + f, 
                        (1 << (n - p - 1 + i)) + l,
                        (f << i) + r
                    );
                    sov.pop();
                }
            f <<= 1;
        }
    }
    put(0, 0, 0, 0);
    return ans;
};
