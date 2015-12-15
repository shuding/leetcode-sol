class Solution {
public:
    #define abs(x) ((x) > 0 ? (x) : -(x))
    int maxArea(vector<int>& height) {
        int n = height.size();
        
        vector<pair<int, int>> heightAndPos;
        for (int i = 0; i < n; ++i)
            heightAndPos.push_back(make_pair(height[i], i));
        sort(heightAndPos.begin(), heightAndPos.end());
        
        int ans = 0, l = heightAndPos[n - 1].second, r = l;
        for (int i = n - 2; i >= 0; --i) {
            ans = max(ans, abs(heightAndPos[i].second - l) * heightAndPos[i].first);
            ans = max(ans, abs(heightAndPos[i].second - r) * heightAndPos[i].first);
            l = min(l, heightAndPos[i].second);
            r = max(r, heightAndPos[i].second);
        }
        return ans;
    }
};