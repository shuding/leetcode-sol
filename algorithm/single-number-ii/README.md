## Single Number II

[题目地址](https://oj.leetcode.com/problems/single-number-ii/)

### 题解

请先参考 [Single Number I](../single-number/).

异或运算的本质是按位的**模 2 加法**，于是 Single Number I 很好理解：出现两次即相互抵消.

用这个思路来考虑 Single Number II，很显然这一题需要一个**模 3 加法的异或运算**. 这样一来出现 3 次的数字会变为 0，而只出现 1 次的数会留下.
于是可以写一个按位模 3 加法，时间复杂度是 `O(dn)`，`d` 表示位数.

另外的思路是，想办法表示每一位的三种状态. 比如我代码中，

- `x` 表示每一位当前**是否模 `3` 大于等于 `1`**
- `y` 表示每一位当前**是否模 `3` 大于等于 `2`**
- `z` 表示每一位当前**是否模 `3` 等于 `0`**

`x` 即为最终答案. 可以参考下面的知乎链接.

### 代码

[Python](./sol.py)

### 其他

[这里有一个引申讨论](http://www.zhihu.com/question/25504454).
