/**
 * 
给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

保证base和exponent不同时为0

 */

/**
 * 1.全面考察指数的正负、底数是否为零等情况。
* 2.写出指数的二进制表达，例如13表达为二进制1101。
* 3.举例:10^1101 = 10^0001* 10^0100 *10^1000。
* 4.通过&1和>>1来逐位读取1101，为1时将该位代表的乘数累乘到最终结果。
 */

function Power(base, exponent) {
  // write code here
  if (exponent == 0)
    return 1
  if (base == 0)
    return 0
  let res = 1
  let e = Math.abs(exponent)
  while (e) {
    if (e & 1)
      res *= base
    base *= base
    e >>= 1
  }

  return exponent > 0 ? res : 1 / res
}