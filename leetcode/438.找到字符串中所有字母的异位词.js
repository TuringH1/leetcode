/**
 * 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

说明：

    字母异位词指字母相同，但排列不同的字符串。
    不考虑答案输出的顺序。

示例 1:

输入:
s: "cbaebabacd" p: "abc"

输出:
[0, 6]

解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。

 示例 2:

输入:
s: "abab" p: "ab"

输出:
[0, 1, 2]

解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-all-anagrams-in-a-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var map = {}
    var len = p.length
    for (let i = 0; i < p.length; i++) {
        let str = p[i]
        map[str] = i
    }
    var count = 0
    var result = []
    var arr = []

    function compare(arr){
        var b = []
        for (let i = 0; i < arr.length; i++) {
            b.push(map[i])
        }
        var re = b[0]
        for (let i = 1; i < b.length; i++) {
            re ^= b[i]
        }
        if (re != 0) {
            return true
        }else{
            return false
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        let is = s[i]
        if (is in map) {
            count++
            arr.push(is)
        }else{
            count = 0
        }
        if (count == len) {
            if (compare(arr)) {
                result.push[i - len + 1]
                arr = []
                arr.push[is]
            }
        }
    }
    return result
};
