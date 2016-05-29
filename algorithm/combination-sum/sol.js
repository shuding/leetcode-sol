/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var sol = function (max, target) {
        var ret = [];
        for (var i = 0; i < candidates.length; ++i) {
            var c = candidates[i];
            if (c <= max) {
                if (c == target) {
                    ret.push([c]);
                } else if (c < target) {
                    var t = sol(c, target - c);
                    for (var j = 0; j < t.length; ++j) {
                        t[j].push(c);
                        ret.push(t[j]);
                    }
                }
            }
        }
        return ret;
    };
    
    return sol(Infinity, target);
};
