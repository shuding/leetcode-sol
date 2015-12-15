class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        bool appears[256] = {0};
        int maxLength = 0, length = 0;
        for (int tail = 0, head = 0; head < s.size(); ++head) {
            if (appears[s[head]]) {
                while (s[tail] != s[head]) {
                    appears[s[tail]] = false;
                    ++tail;
                    --length;
                }
                ++tail;
                --length;
            }
            ++length;
            appears[s[head]] = true;
            maxLength = max(maxLength, length);
        }
        return maxLength;
    }
};