# Definition for a  binary tree node
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    # @param root, a tree node
    # @return an integer
    def minDepth(self, root):
        if root == None:
            return 0
        
        nodeList = [[root, 1]]
        
        def isLeaf(node):
            return node.left == None and node.right == None
        
        for node in nodeList:
            if node[0].left != None:
                if isLeaf(node[0].left):
                    return node[1] + 1
                nodeList.append([node[0].left, node[1] + 1])
            if node[0].right != None:
                if isLeaf(node[0].right):
                    return node[1] + 1
                nodeList.append([node[0].right, node[1] + 1])
        
        return 1
