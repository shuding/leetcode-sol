## Maximum Product Subarray 

[题目地址](https://oj.leetcode.com/problems/maximum-product-subarray/).

### 题解

考虑前 n 项乘积，记 ![math-1](http://latex.codecogs.com/gif.latex?p(n-1)%3D%5Cprod_%7Bi%3D0%7D%5E%7Bn-1%7D%7BA%5Bi%5D%7D).

则从下标 x 到 y 的连续乘积为 ![math-3](http://latex.codecogs.com/gif.latex?p(y)%2Fp(x-1))，注意 x 不能大于 y.

那么我们从 `0` 到 `len(A)` 枚举 y，考虑三种情况，求出 x，并更新最大解：

- ![math-4](http://latex.codecogs.com/gif.latex?p(y)%3E0)：
此时我们需要找到最小的 ![math-5](http://latex.codecogs.com/gif.latex?p(x)) 满足 ![math-6](http://latex.codecogs.com/gif.latex?p(x)%3E0%2C%2520x%5Cle%2520y);
- ![math-4](http://latex.codecogs.com/gif.latex?p(y)%3C0)：
此时我们需要找到最大的 ![math-5](http://latex.codecogs.com/gif.latex?p(x)) 满足 ![math-6](http://latex.codecogs.com/gif.latex?p(x)%3C0%2C%2520x%5Cle%2520y);
- ![math-4](http://latex.codecogs.com/gif.latex?p(y)=0)：
此时相当于截断整个数组.

所以我们依次维护最小的**正前缀积**和最大的**负前缀积**，更新当前答案，考虑遇到 0 时候的截断初始化即可.

### 代码

[Python](/sol.py)
