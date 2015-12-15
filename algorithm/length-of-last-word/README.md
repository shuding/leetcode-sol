## Length of Last Word

[题目地址](https://oj.leetcode.com/problems/length-of-last-word/).

### 题解

用 `split(' ')` 分隔成一个个单词，用 `filter` 过滤其中空单词（长度为 0）的单词，再把最后一个单词长度输出.

注意一个单词都没有的情况.

### 代码

[Python](./sol.py)
