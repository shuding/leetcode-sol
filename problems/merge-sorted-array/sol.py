class Solution:
    # @param A  a list of integers
    # @param m  an integer, length of A
    # @param B  a list of integers
    # @param n  an integer, length of B
    # @return nothing
    def merge(self, A, m, B, n):
        
        f = lambda x, y: [] if x == m and y == n else [A[x]] + f(x + 1, y) if y == n else [B[y]] + f(x, y + 1) if x == m else [A[x]] + f(x + 1, y) if A[x] < B[y] else [B[y]] + f(x, y + 1)
        
        C = f(0, 0)
        
        for i in range(len(C)):
            A[i] = C[i]
