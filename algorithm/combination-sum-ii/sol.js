/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates = candidates.sort((a, b) => a - b);
    var sol = function (maxI, target) {
        var ret = [];
        for (var i = maxI - 1; i >= 0; --i) 
            if (i + 1 == maxI || candidates[i] != candidates[i + 1]) {
                var c = candidates[i];
                if (c == target) {
                    ret.push([c]);
                } else if (c < target) {
                    var t = sol(i, target - c);
                    for (var j = 0; j < t.length; ++j) {
                        t[j].push(c);
                        ret.push(t[j]);
                    }
                }
            }
        return ret;
    };
    
    return sol(candidates.length, target);
};
