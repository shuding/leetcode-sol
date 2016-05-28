/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var l = 0, r = nums.length - 1, m;
    var lowerBound, upperBound;
    while (l + 1 < r) {
        m = (l + r) >> 1;
        if (nums[m] < target) l = m;
        else if (nums[m] >= target) r = m;
    }
    if (nums[l] == target) lowerBound = l;
    else if (nums[l + 1] == target) lowerBound = l + 1;
    else if (nums[l + 2] == target) lowerBound = l + 2;
    else return [-1, -1];
    
    l = 0;
    r = nums.length - 1;
    while (l + 1 < r) {
        m = (l + r) >> 1;
        if (nums[m] <= target) l = m;
        else if (nums[m] > target) r = m;
    }
    if (nums[r] == target) upperBound = r;
    else if (nums[r - 1] == target) upperBound = r - 1;
    else if (nums[r - 2] == target) upperBound = r - 2;
    
    return [lowerBound, upperBound];
};
