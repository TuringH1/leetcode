/**
 * 自除数 是指可以被它包含的每一位数除尽的数。

例如，128 是一个自除数，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。

还有，自除数不允许包含 0 。

给定上边界和下边界数字，输出一个列表，列表的元素是边界（含边界）内所有的自除数。

示例 1：

输入： 
上边界left = 1, 下边界right = 22
输出： [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

注意：

    每个输入参数的边界满足 1 <= left <= right <= 10000。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/self-dividing-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var arr = []
    var flag = 0
    for (let i = left; i <= right; i++) {
        flag = 0
        let k = i
        while(k > 0){
            var digit = k % 10
            k = Math.floor(k / 10)
            if (digit == 0) {
                flag = 1
                break
            }
            if (i % digit != 0) {
                flag = 1
                break
            }
        }
        if (flag == 0) {
            arr.push(i)
        }
    }
    return arr
};
console.log(selfDividingNumbers(1,22))