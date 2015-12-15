## Single Number

[题目地址](https://oj.leetcode.com/problems/single-number/)

### 题解

这是一个经典问题，可以利用异或运算解决.

异或运算有以下性质（a、b、c 均为任意整数）：

- ![formula](http://latex.codecogs.com/gif.latex?a%5coplus%200=a)
- ![formula](http://latex.codecogs.com/gif.latex?a%5Coplus%20a=0)
- ![formula](http://latex.codecogs.com/gif.latex?a%5Coplus%20b=b%5Coplus%20a)
- ![formula](http://latex.codecogs.com/gif.latex?(a%5Coplus%20b)%5Coplus%20c=a%5Coplus%20(b%5Coplus%20c))

于是很明显，我们把所有数字异或在一起，出现两次的数字会自己抵消，最终结果即为只出现一次的数字.

### 代码

[Python](./sol.py)

### 其他

[这里有一个引申讨论](http://www.zhihu.com/question/25504454).
