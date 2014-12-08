class Solution {
public:
    bool solved[1000];
    vector<string> solutions[1000];
    
    vector<string> wordBreak(string s, unordered_set<string> &dict) {
        
        if (solved[s.size()])
            return solutions[s.size()];
            
        string word = "";
        
        for (int i = 0; i < s.size(); ++i) {
            word += s[i];
            if (dict.find(word) != dict.end()) {
                // a feasible split
                wordBreak(s.substr(i + 1), dict);
                for (int j = 0; j < solutions[s.size() - i - 1].size(); ++j)
                    solutions[s.size()].push_back(word + " " + solutions[s.size() - i - 1][j]);
                if (i + 1 == s.size())
                    solutions[s.size()].push_back(word);
            }
        }
        
        solved[s.size()] = 1;
        return solutions[s.size()];
        
    }
};
