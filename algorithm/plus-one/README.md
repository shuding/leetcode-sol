## Plus One

[题目地址](https://oj.leetcode.com/problems/plus-one/).

### 题解

很简单的题目，给一个数组表示的（高精度）数字加上 1.

需要注意 `999999` 这种进位的情况，输入的数组是高位在前的，需要 insert 而不能 push_back.

### 代码

[Python](./sol.py)
