class Solution:
    # @param S, a list of integer
    # @return a list of lists of integer
    def subsets(self, S):
        ans = [[]]
        S.sort()
        
        for s in S:
            ans = ans + map(lambda x: x + [s], ans)
        
        return ans
