class Solution:
    # @return a list of lists of integers
    def combine(self, n, k):
        choose = lambda n, k: [[]] if k == 0 else [] if n < k else choose(n - 1, k) + map(lambda x: x + [n], choose(n - 1, k - 1))
        return choose(n, k)
