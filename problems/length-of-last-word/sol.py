class Solution:
    # @param s, a string
    # @return an integer
    def lengthOfLastWord(self, s):
        words = filter(lambda word: word if len(word) else None, s.split(' '))
        
        if words == []:
            return 0
        
        return len(words[-1])
