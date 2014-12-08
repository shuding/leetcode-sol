class Solution:
    # @param num, a list of integer
    # @return an integer
    def findPeakElement(self, num):
        left = 0
        right = len(num) - 1
        while left <= right:
            mid = (left + right) / 2
            
            if not mid:
                leftValue = num[mid] - 1
            else:
                leftValue = num[mid - 1]
            if mid + 1 == len(num):
                rightValue = num[mid] + 1
            else:
                rightValue = num[mid + 1]
                
            if num[mid] > leftValue and num[mid] > rightValue:
                return mid
            if num[mid] > leftValue:
                left = mid + 1
            else:
                right = mid - 1
        
        return mid
        
