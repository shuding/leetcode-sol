class Solution:
    # @return a boolean
    def isPalindrome(self, x):
        return str(x) == str(x)[::-1]
