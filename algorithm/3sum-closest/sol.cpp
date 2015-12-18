class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        int ans = ~0u >> 1, method;
        sort(nums.begin(), nums.end());
        for (int i = 0; i < nums.size(); ++i) {
            int a = nums[i] - target;
            for (int j = i + 1, k = nums.size() - 1; j < k; ++j) {
                while (nums[j] + nums[k] + a > 0 && j < k) {
                    if (nums[j] + nums[k] + a < abs(ans)) ans = nums[j] + nums[k] + a, method = ans + target;
                    --k;
                }
                if (j < k) {
                    if (-(nums[j] + nums[k] + a) < abs(ans)) ans = nums[j] + nums[k] + a, method = ans + target;
                }
            }
        }
        return method;
    }
};