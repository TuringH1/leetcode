/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
 * 如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。 
 */

 /**
  * BST的后序序列的合法序列是，对于一个序列S，最后一个元素是x （也就是根），
  * 如果去掉最后一个元素的序列为T，那么T满足：T可以分成两段，前一段（左子树）小于x，
  * 后一段（右子树）大于x，且这两段（子树）都是合法的后序序列。完美的递归定义 : ) 。 
  */

function VerifySquenceOfBST(sequence)
{
    // write code here
  if(sequence.length == 0){
    return false
  }
  return judge(sequence, 0, sequence.length)
}
 
function judge(arr, l, r) {
  if(l >= r){
    return true
  }
  let i = r
  while(i > l && arr[i] >=arr[r]){
    i --
  }
  for(let j = i - 1; j >= l; j--){
    if(arr[j] > arr[r]){
      return false
    }
  }
  return judge(arr, l, i - 1) && judge(arr, i, r - 1)
}