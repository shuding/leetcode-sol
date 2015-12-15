class Solution:
    # @param s, a string
    # @return a boolean
    def isPalindrome(self, s):
        alphaNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        s = s.upper()
        s = ''.join(c for c in s if c in alphaNum)
        return s == s[::-1]
