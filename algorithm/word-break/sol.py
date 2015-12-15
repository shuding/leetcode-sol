class Solution:
    # @param s, a string
    # @param dict, a set of string
    # @return a boolean
    def wordBreak(self, s, dict):
        solved = [False for i in range(len(s) + 1)]
        solved[0] = True
        for i in range(len(s)):
            for j in range(i + 1):
                if s[j : i + 1] in dict:
                    solved[i + 1] |= solved[j]
        return solved[len(s)]
