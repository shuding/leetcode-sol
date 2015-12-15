class Solution {
public:
    string convert(string s, int numRows) {
        string ret;
        int cycle = numRows * 2 - 2;
        for (int r = 0; r + r <= cycle; ++r) {
            for (int i = 0; i < s.size(); ++i)
                if (!cycle || i % cycle == r || i % cycle == cycle - r)
                    ret += s[i];
        }
        return ret;
    }
};