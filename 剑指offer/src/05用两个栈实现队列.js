/**
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。 
 */

 /**
首先要明确队列的特性是先进先出，栈的特性是先进后出；
在进队列的方法里我们只要有容器能装元素就行了，所以直接往栈1里压；
在出队列方法里，要保证出队列的是最先进入的元素：

    最直观的想法就是把栈1的元素挨个出栈，然后往栈2里压。 

但是还是要思考一下真的这么简单吗？不是的，栈2为空时才允许栈1往外弹元素并压到栈2里。

    如果随时都可以往栈2里压，那么往栈1里压两个元素5、6（栈1状态是：{5,6}），马上出栈往栈2里压（栈2状态：{6,5}）；
    接着栈1又来了个元素7，栈2的元素5、6还没出栈，此时要是再把7压到栈2那么栈顶元素就变7了，没法先取出5；
    所以在往栈2压完一批元素后，栈1进了新的元素想往栈2压的时候，栈2必须把上一批的元素清空了才行(也就是栈2必须是空的)。 
  */

let arr1 = []
let arr2 = []
function push(node)
{
    // write code here
    arr1.push(node)
     
}
function pop()
{
    // write code here
    if(arr2.length == 0){
        while(arr1.length){
            arr2.push(arr1.pop())
        }
    }
    return arr2.pop()
}