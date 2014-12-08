class Solution:
    # @param A, a list of integer
    # @return an integer
    def singleNumber(self, A):
        x = 0
        y = 0
        z = 0
        
        for a in A:
            z = a & x & y
            y |= a & x
            x |= a
            y &= ~z
            x &= ~z
        
        return x
