class Solution {
public:
    #define MAX_LEN 1000000
    int strStr(string haystack, string needle) {
        // orz
        if (!needle.size()) return 0;
        
        // KMP algo.
        int p[MAX_LEN];
        p[0] = -1;
        for (int i = 0; i < needle.size(); ++i) {
            int j = i - 1;
            while (j >= 0 && needle[i] != needle[p[j] + 1]) {
                j = p[j];
            }
            if (j >= 0) {
                p[i] = p[j] + 1;
            } else {
                p[i] = -1;
            }
        }
        for (int i = needle.size() - 1; i > 0; --i) 
            p[i] = p[i - 1] + 1;
        p[0] = 0;
        
        int x = 0, y = 0;
        while (x < haystack.size() && y < needle.size()) {
            if (haystack[x] != needle[y]) {
                if (!y) {
                    ++x;
                } else {
                    y = p[y];
                }
            } else {
                ++x; ++y;
                if (y == needle.size()) {
                    return x - needle.size();
                }
            }
        }
        return -1;
    }
};