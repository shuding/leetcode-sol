class Solution(object):
    def fourSum(self, nums, target):
        sum = {}
        ans = []
        nums.sort()
        for j in range(len(nums)):
            for i in range(j):
                x = nums[i]
                y = nums[j]
                
                if sum.get(target - x - y):
                    for t in sum[target - x - y]:
                        if i > t[1]:
                            if i == t[1] + 1 or nums[i] != nums[i - 1]:
                                if i + 1 == j or nums[j] != nums[j - 1]:
                                    ans.append([nums[t[0]], nums[t[1]], x, y])
                            
                if i and nums[i] == nums[i - 1]:
                    continue
                if i + 1 < j and nums[j] == nums[j - 1]:
                    continue
                if sum.get(x + y):
                    sum[x + y].append([i, j])
                else:
                    sum[x + y] = [[i, j]]
                            
        return ans
