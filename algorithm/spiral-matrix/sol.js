/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix[0]) return matrix;
    
    var l = 0, r = matrix[0].length, t = 0, b = matrix.length;
    var ret = [], d = 0;
    
    while (l < r && t < b) {
        if (d == 0) {
            for (var i = l; i < r; ++i)
                ret.push(matrix[t][i]);
            t++;
            d = 1;
        } else if (d == 1) {
            for (var i = t; i < b; ++i)
                ret.push(matrix[i][r - 1]);
            r--;
            d = 2;
        } else if (d == 2) {
            for (var i = r - 1; i >= l; --i)
                ret.push(matrix[b - 1][i]);
            b--;
            d = 3;
        } else if (d == 3) {
            for (var i = b - 1; i >= t; --i)
                ret.push(matrix[i][l]);
            l++;
            d = 0;
        }
    }
    
    return ret;
};
