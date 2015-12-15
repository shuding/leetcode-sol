## Super Ugly Number

[题目地址](https://leetcode.com/problems/super-ugly-number/)

### 题解

维护一个队列，类似 `[1, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32]`。不断把 `primes` 依次与里面相乘，并 append 最小的那一个。为了省时间可以记录一个游标（不用每次从头乘）。

### 代码

[C++](./sol.cpp)
