class Solution:
    # @param A, a list of integers
    # @return an integer
    def maxProduct(self, A):
        
        needsInit = True
        maxProduct  = A[0]
        
        for x in A:
            if needsInit:
                maxNegative = 0
                minPositive = 0
                product     = 1
                needsInit   = False
                
            product *= x
            maxProduct = max(maxProduct, product)
            
            if product < 0:
                if maxNegative:
                    maxProduct = max(maxProduct, product / maxNegative)
                    maxNegative = max(maxNegative, product)
                else:
                    maxNegative = product
            elif product > 0:
                if minPositive:
                    maxProduct = max(maxProduct, product / minPositive)
                    minPositive = min(minPositive, product)
                else:
                    minPositive = product
            else:
                needsInit = True
                
        return maxProduct
