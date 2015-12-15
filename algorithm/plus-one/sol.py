class Solution:
    # @param digits, a list of integer digits
    # @return a list of integer digits
    def plusOne(self, digits):
        add = 1
        pos = len(digits)
        
        while pos and add:
            digits[pos - 1] += add
            add = digits[pos - 1] / 10
            digits[pos - 1] %= 10
            pos -= 1
            
        if add:
            digits.insert(0, add)
        
        return digits
