/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var l = 0, r = nums.length - 1, m;
    while (l + 1 < r) {
        m = (l + r) >> 1;
        if (nums[m] < target) l = m;
        else if (nums[m] >= target) r = m;
    }
    if (nums[l] >= target) return l;
    if (nums[l + 1] >= target) return l + 1;
    if (nums[l + 2] >= target) return l + 2;
    return r + 1;
};
