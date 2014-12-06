## Pow(x, n)

[题目地址](https://oj.leetcode.com/problems/powx-n/).

### 题解

求乘方（指数为整数）. 用快速幂的方法将问题规模缩小一半：![math-1](http://latex.codecogs.com/gif.latex?x%5En%3D%5Cleft(x%5E%7Bn%2F2%7D%5Cright)%5E2)

注意指数为负的时候.

快速幂的时间复杂度为 `log` 级别.

### 代码

[Python](./sol.py)
