class Solution(object):
    def nextPermutation(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        i = -1
        j = 0
        l = len(nums)
        
        for x in range(l - 1):
            if nums[x] < nums[x + 1]:
                i = x
                
        for x in range(l):
            if nums[x] > nums[i]:
                j = x
                
        if i >= 0:
            tmp = nums[i]
            nums[i] = nums[j]
            nums[j] = tmp
            
        x = i + 1
        y = l - 1
        
        while x < y:
            tmp = nums[x]
            nums[x] = nums[y]
            nums[y] = tmp
            x += 1
            y -= 1
