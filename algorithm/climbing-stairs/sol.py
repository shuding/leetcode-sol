class Solution:
    # @param n, an integer
    # @return an integer
    def climbStairs(self, n):
        fibA = fibB = 1
        
        for i in range(n - 1):
            fibC = fibA + fibB
            fibA = fibB
            fibB = fibC
            
        return fibB