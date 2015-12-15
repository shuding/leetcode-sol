class Solution:
    # @param A, a list of integers
    # @return an integer
    def maxSubArray(self, A):
        miniPrefix = 0
        maxiSubArraySum = A[0]
        sum = 0
        
        for i in A:
            sum += i
            maxiSubArraySum = max(maxiSubArraySum, sum - miniPrefix)
            miniPrefix = min(miniPrefix, sum)
            
        return maxiSubArraySum
