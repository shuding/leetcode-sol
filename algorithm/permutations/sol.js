/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (!nums.length) return [[]];
    let f = nums[0], p = permute(nums.slice(1));
    return nums
        .map((u, i) => p.map(p => p.slice(0, i).concat([f]).concat(p.slice(i))))
        .reduce((r, p) => r.concat(p), []);
};
