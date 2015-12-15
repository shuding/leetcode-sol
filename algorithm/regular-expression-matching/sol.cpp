class Solution {
public:
    // 0: not set, 1: true, 2: false
    int f[100][100]; 
    
    #define F f[i + 1][j + 1]
    
    int getF(string &s, string &p, int i, int j) {
        if (F)
            return F;

        // case 1: regex is empty
        if (j < 0) {
            // s must be empty
            return F = (i < 0 ? 1 : 2);
        }
        
        // case 2: start with a dot
        if (p[j] == '.') {
            // s is not empty, check next
            if (i >= 0)
                return F = getF(s, p, i - 1, j - 1);
            else
                return F = 2;
        }
        
        // case 3: start with a char
        if (p[j] != '*') {
            // s shares the same first letter with p, check next
            if (i >= 0 && s[i] == p[j])
                return F = getF(s, p, i - 1, j - 1);
            else
                return F = 2;
        }
        
        // case 4: start with a asterisk
        char prev = j ? p[j - 1] : '-';
        if (prev == '*') return F = getF(s, p, i, j - 1);
        
        if (getF(s, p, i, j - 2) == 1) // skip
            return F = 1;
        for (int k = 0; i - k >= 0; ++k)
            if (prev == '.' || prev == s[i - k]) {
                // it matches
                if (getF(s, p, i - k - 1, j - 2) == 1) {
                    return F = 1;
                }
            } else {
                break;
            }
        return F = 2;
    }
    bool isMatch(string s, string p) {
        memset(f, 0, sizeof f);
        return getF(s, p, s.size() - 1, p.size() - 1) == 1;
    }
};