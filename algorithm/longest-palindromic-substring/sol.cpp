class Solution {
public:
    string longestPalindrome(string s) {
        string str = "#";
        for (int i = 0; i < s.size(); ++i) str += s[i], str += '#';
        
        // the Manacher's algorithm
        int p[2010] = {0}, m = 0, ans = 0, ansCnt = 0;
        for (int i = 0; i < str.size(); ++i) {
            if (m + p[m] > i) {
                p[i] = min(p[m * 2 - i], m + p[m] - i);
            }
            while (i - p[i] > 0 && i + p[i] + 1 < str.size() 
                && str[i - p[i] - 1] == str[i + p[i] + 1]) 
                ++p[i];
            if (i + p[i] > m + p[m]) m = i;
            if (str[i] != '#') {
                if ((p[i] / 2) * 2 + 1 > ansCnt) ansCnt = (p[i] / 2) * 2 + 1, ans = i;
            } else {
                if (((p[i] + 1) / 2) * 2 > ansCnt) ansCnt = ((p[i] + 1) / 2) * 2, ans = i;
            }
            //if (p[i] > p[ans] && str[i] != '#') ans = i;
        }
        
        string ret;
        for (int i = ans - p[ans]; i <= ans + p[ans]; ++i)
            if (str[i] != '#') ret += str[i];
        
        return ret;
    }
};