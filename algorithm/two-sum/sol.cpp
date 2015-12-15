class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<pair<int, int>> pii;
        for (int i = 0; i < nums.size(); ++i) {
            pii.push_back(make_pair(nums[i], i + 1));
        }
        sort(pii.begin(), pii.end());
        
        for (int head = 0, tail = pii.size() - 1; head < tail; ++head) {
            while (pii[head].first + pii[tail].first > target)
                --tail;
            if (pii[head].first + pii[tail].first == target) {
                return vector<int> {
                    min(pii[head].second, pii[tail].second), 
                    max(pii[head].second, pii[tail].second)
                };
            }
        }
    }
};