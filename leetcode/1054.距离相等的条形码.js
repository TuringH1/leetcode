/**
 * 在一个仓库里，有一排条形码，其中第 i 个条形码为 barcodes[i]。
请你重新排列这些条形码，使其中两个相邻的条形码 不能 相等。 你可以返回任何满足该要求的答案，此题保证存在答案。
 
示例 1：
输入：[1,1,1,2,2,2]
输出：[2,1,2,1,2,1]
示例 2：
输入：[1,1,1,1,2,2,3,3]
输出：[1,3,1,3,2,1,2,1]
 */

 /**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var arr = [1,1,1,2,2,2];

var rearrangeBarcodes = function(barcodes) {
    barcodes.sort(function(a, b) {
        return a - b;
      });
      var foo = [];
      var b = barcodes.length - 1;
      for (let i = 0; i < barcodes.length; i +=2) {
          foo[i] = barcodes[i];
          foo[i+1] = barcodes[b - 1];
          b --;
      }
      return (foo);
};
console.log(rearrangeBarcodes(arr));