/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // remove all the increasing parts at the beginning
    var _ = 0;
    while (_ < nums.length - 1 && nums[_] > nums[_ + 1]) ++_;
    if (_ > 0) {
    	_--;
        nums[_] = nums[0] - _;
        nums = nums.slice(_);
    }
    
    // "segment tree"
    var root = {};
    var Inf = nums.length;
    function init(node, l, r) {
        node.min = Inf;
        
        if (l + 1 == r) return;
        
        var m = (l + r) >> 1;
        var left = {}, right = {};
        
        init(left, l, m);
        init(right, m, r);
        
        node.l = left;
        node.r = right;
    }
    
    function updateMin(node, l, r, v, index) {
        if (l + 1 == r) return node.min = Math.min(node.min, v);
        
        var m = (l + r) >> 1;
        if (index < m) 
            updateMin(node.l, l, m, v, index);
        else
            updateMin(node.r, m, r, v, index);
            
        node.min = Math.min(node.l.min, node.r.min);
    }
    
    function getMin(node, l, r, _l, _r) {
        if (l + 1 == r) return node.min;
        
        var m = (l + r) >> 1;
        if (_r <= m) 
            return getMin(node.l, l, m, _l, _r);
        else if (_l >= m)
            return getMin(node.r, m, r, _l, _r);
            
        return Math.min(getMin(node.l, l, m, _l, m), getMin(node.r, m, r, m, _r));
    }
    
    init(root, 0, nums.length);
    updateMin(root, 0, nums.length, 0, nums.length - 1);
    
    var min = 0;
    
    for (var i = nums.length - 2; i >= 0; --i) {
        min = getMin(root, 0, nums.length, i + 1, i + nums[i] + 1) + 1;
        updateMin(root, 0, nums.length, min, i);
    }
    
    return min;
};
