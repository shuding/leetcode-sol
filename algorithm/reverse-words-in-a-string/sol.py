class Solution:
    # @param s, a string
    # @return a string
    def reverseWords(self, s):
        return ' '.join(map(lambda w: w[::-1], filter(lambda w: w != '', s[::-1].split(' '))))
