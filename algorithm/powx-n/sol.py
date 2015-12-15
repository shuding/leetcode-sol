class Solution:
    # @param x, a float
    # @param n, a integer
    # @return a float
    def pow(self, x, n):
        if not n:
            return 1
        if n < 0:
            return 1.0 / self.pow(x, -n)
        
        temp = self.pow(x, n / 2)
        temp *= temp
        
        if n & 1:
            temp *= x
            
        return temp
