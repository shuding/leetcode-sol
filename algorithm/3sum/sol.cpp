class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> ret;
        sort(nums.begin(), nums.end());
        int preva = nums.size() ? nums[0] - 1 : 0;
        for (int i = 0; i < nums.size(); ++i) {
            int a = nums[i];
            if (a == preva) continue;
            preva = a;
            int prev = nums[i + 1] - 1;
            for (int j = i + 1, k = nums.size() - 1; j < k; ++j) {
                if (nums[j] == prev) continue;
                prev = nums[j];
                while (nums[j] + nums[k] > -a && j < k)
                    --k;
                if (j < k && nums[j] + nums[k] == -a) {
                    vector<int> tmp;
                    tmp.push_back(a);
                    tmp.push_back(nums[j]);
                    tmp.push_back(nums[k]);
                    ret.push_back(tmp);
                }
            }
        }
        return ret;
    }
};