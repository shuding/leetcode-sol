## Word Break II

[题目地址](https://oj.leetcode.com/problems/word-break-ii/)

### 题解

这是一个典型的 DP 题目. 例子：

`s = "catsanddogdog"`

`dict = ["cat", "cats", "and", "sand", "dog"]`

前半部分 `catsand` 有两种划分，而这两种划分并不影响后面 `dogdog` 的答案. 也就是说**计算结果可复用，把问题分割后，各部分的决策也互不干扰**. 这是 DP 的基本条件.

做法很显然，用 `solutions[index]` 存储**从 `index` 至字符串末尾的子串**的所有划分方案. 然后使用一个递归的动态规划（也可以说是记忆化搜索）.

### 代码

[C++](./sol.cpp)
