class Solution {
public:
    vector<string> generateParenthesis(int n) {
        return genPrefix(n, 0, 0);
    }
    vector<string> genPrefix(int n, int x, int y) {
        vector<string> ret, tmp;
        if (n == x && x == y) {
            ret.push_back("");
            return ret;
        }
        if (x < n) {
            tmp = genPrefix(n, x + 1, y);
            for (int i = 0; i < tmp.size(); ++i) ret.push_back('(' + tmp[i]);
        }
        if (x > y) {
            tmp = genPrefix(n, x, y + 1);
            for (int i = 0; i < tmp.size(); ++i) ret.push_back(')' + tmp[i]);
        }
        return ret;
    }
};