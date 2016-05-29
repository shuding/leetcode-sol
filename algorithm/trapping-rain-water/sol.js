/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var toRight = [], m = 0, tot = 0;
    for (var i = 0; i < height.length; ++i) {
        m = Math.max(m, height[i]);
        toRight[i] = m;
    }
    m = 0;
    for (var i = height.length - 1; i >= 0; --i) {
        m = Math.max(m, height[i]);
        tot += Math.min(m, toRight[i]) - height[i];
    }
    return tot;
};
