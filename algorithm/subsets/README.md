## Subsets

[题目地址](https://oj.leetcode.com/problems/subsets/)

### 题解

输出集合的所有子集.

递归来做：集合 `{ a, b, c, d, .. }` 的所有子集 = (集合 `{ b, c, d, .. }` 的所有子集 + 集合 `{ b, c, d, .. }` 的所有子集与 `a` 的并)

用 Python 的话只有一行主要代码.

### 代码

[Python](./sol.py)
