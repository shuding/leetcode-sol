class Solution(object):
    def longestValidParentheses(self, s):
        """
        :type s: str
        :rtype: int
        """
        k = [0]
        c = 0
        ans = 0
        for i in range(len(s)):
            if s[i] == '(':
                c += 1
            else:
                c -= 1
            k.append(c)
        
        p = []
        for i in range(len(k))[::-1]:
            if not len(p):
                p.append([k[i], i])
            else:
                if k[i] > p[len(p) - 1][0]:
                    p.append([k[i], i])
                elif k[i] < p[len(p) - 1][0]:
                    while len(p) and k[i] < p[len(p) - 1][0]:
                        p.pop()
                    if not len(p) or k[i] > p[len(p) - 1][0]:
                        p.append([k[i], i])
            
            if len(p) and k[i] == p[len(p) - 1][0]:
                if p[len(p) - 1][1] - i > ans:
                    ans = p[len(p) - 1][1] - i
        
        return ans
