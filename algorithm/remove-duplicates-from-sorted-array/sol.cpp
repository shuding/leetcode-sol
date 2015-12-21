class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int n = 0;
        for (int i = 0; i < nums.size(); ++i)
            if (!i || nums[i] != nums[i - 1]) {
                ++n;
            } else {
                nums.erase(nums.begin() + i);
                --i;
            }
        return n;
    }
};