## Evaluate Reverse Polish Notation

[题目地址](https://oj.leetcode.com/problems/evaluate-reverse-polish-notation/).

### 题解

经典的 [后缀表达式](https://zh.wikipedia.org/zh/%E9%80%86%E6%B3%A2%E5%85%B0%E8%A1%A8%E7%A4%BA%E6%B3%95)，方便存储、计算一个普通表达式.

其计算方法是使用一个栈模拟，遇到数字进栈，遇到运算符则弹出两个栈顶元素计算.

注意：

- 出栈顺序和运算符左右位置是反的，但只有除法要特殊处理，Python 用 `pop(-2)`;
- 除法需考虑负数，用 `int(float(a) / float(b))`.

### 代码

[Python](./sol.py)
