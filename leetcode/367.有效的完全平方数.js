/**
 * 给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。

说明：不要使用任何内置的库函数，如  sqrt。

示例 1：

输入：16
输出：True

示例 2：

输入：14
输出：False
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var i = 1
    while (num > 0) {
        num -= i
        i += 2
    }
    return num == 0
};
/**
 * 完全平方数肯定是  1+3+5+...+(2n-1)的和
 */