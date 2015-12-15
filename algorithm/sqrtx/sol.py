class Solution:
    # @param x, an integer
    # @return an integer
    def sqrt(self, x):
        if x < 2:
            return x
        
        left = 1
        right = x
        
        while left < right:
            mid = (left + right) / 2
            if mid ** 2 < x:
                left = mid + 1
            elif mid ** 2 > x:
                right = mid
            else:
                right = mid + 1
                break;
        
        return right - 1
