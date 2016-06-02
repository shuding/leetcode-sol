/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (!nums.length) return [[]];
    let f = nums[0], p = permuteUnique(nums.slice(1)), t;
    return nums
        .map((u, i) => p.map(p => (t = p.slice(0, i)).includes(f) ? [] : t.concat([f]).concat(p.slice(i))))
        .reduce((r, p) => r.concat(p), [])
        .filter(p => p.length);
};
