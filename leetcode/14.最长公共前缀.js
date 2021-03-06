/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"

示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-common-prefix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===0)
        return '';
    for(var i=0;i<strs[0].length;i++){
        var val=strs[0][i];
        for(var ii=1;ii<strs.length;ii++){
            if(i===strs[ii].length||strs[ii][i]!==val){
                return strs[ii].slice(0,i);
            }
        }
    }
    return strs[0];
};
console.log(longestCommonPrefix(["flower","flow","flight"]))