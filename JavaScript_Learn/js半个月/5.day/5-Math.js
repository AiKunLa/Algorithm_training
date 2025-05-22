console.log(Math.random()*10) // 0-10之间的随机数
console.log(Math.floor(2.3))// 向下取整
console.log(Math.ceil(2.3)) // 向上取整
console.log(Math.round(2.3)) // 四舍五入
console.log(Math.max(1,2,3,4,5)) // 最大值
console.log(Math.min(1,2,3,4,5)) // 最小值
console.log(Math.pow(2,3)) // 2的3次方
console.log(Math.sqrt(4)) // 根号4
console.log(Math.abs(-1)) // 绝对值

console.log('*************************************************\n')

console.log(Math.random()*10) // 0-10之间的随机数
console.log(Math.random(5,10)) // 5-10之间的随机数  不支持这种写法，需要自己写一个函数来实现
// 生成N-M直间的随机数
function myRandom(n,m){
    return Math.floor(Math.random()*(m-n+1))+n;
}

// 随机点名
let arr = ['张三','李四','王五','赵六','田七','周八','吴九','郑十','钱十一','孙十二','李十三','周十四','吴十五','郑十六','钱十七','孙十八','李十九','周二十']
let index = Math.floor(Math.random()*arr.length)
console.log(arr[index])