/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var n = nums.length + 1;
    for (var i = 0; i < nums.length; ++i) 
        if (nums[i] <= 0 || nums[i] >= n) nums[i] = 0;
    for (var i = 0; i < nums.length; ++i)
        if (nums[i] % n > 0)
            nums[nums[i] % n - 1] += n;
    for (var i = 0; i < nums.length; ++i) 
        if (nums[i] < n) return i + 1;
    return n;
};
