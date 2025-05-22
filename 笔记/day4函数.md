## 函数

------

是什么 ：函数一类特殊的对象，它可以对一段代码的逻辑进行封装，并且能够被多次利用

作用：提高代码复用率

1. 函数声明

   ```javascript
   1. // 函数表达式（也可能是一种匿名函数） 函数表达式不存在函数提升，必须在变量赋值后才能调用
   // 将函数赋值给变量
   add(a,b) // 报错 （必须先声明后调用）
   // 匿名函数
   let add = function(a,b){// 使用了let 不会有函数提升
       return a+b;
   }
   // 非匿名函数
   const calculate = function add(a, b) {
       return a + b;
   };
   console.log(calculate(1, 2));
   
   
   2 . 具体名函数（可以在声明前调用）// 函数声明 函数提升特性，即在代码执行前，JavaScript 引擎会将函数声明提升到当前作用域的顶部，这意味着我们可以在函数声明之前调用该函数 （）
   function add1(a,b){
       return a+b;
   }
   
   
   3. // 箭头函数
   let add2 = (a,b)=>{return a+b;}
   
   4. // 
   // 匿名函数
   let btn = document.querySelector('button')
   btn.onclick = function(){
       console.log('click')
   }
   
   5. //立即执行函数 (函数)(调用函数)  前一个小括号是声明函数，后一个是调用函数
   (function (){})() // 第一种写法
   (function(){}()) // 第二种写法
   //  立即执行函数
   (function(){
       let num = 10 //
       console.log('立即执行函数')
   })(); //必须加分号 否则两函数会连在一起，num变量被声明了两次，这样会报错 （防止变量污染）
   (function(){
       let num = 20 //
       console.log('立即执行函数')
   })()
   ```

2. 函数能够接收多个参数并返回数据（参数可以是函数） （**剩余参数允许函数接收任意数量的参数，并将这些参数收集到一个数组中**。）

   ```javascript
   // 参数 剩余参数和展开语法
   // 剩余参数
   let add3 = function (...args) {
     let sum = 0;
     for (let i = 0; i < args.length; i++) {
       sum += args[i];
     }
     return sum;
   };
   
   function add2(...args) {
     return args.reduce((a, b) => a + b, 1); // 1是初始值
   }//结果为7   1 + 1 + 2 + 3 = 7
   ```

3. 闭包 = 内部函数加外部函数

   **闭包的形成通常是在一个函数内部返回另一个函数**，**并且内部函数引用了外部函数的变量**（即内部函数+外部函数变量）

   ```javascript
   function createCounter() {
       let count = 0; // 这就是面包店的原材料
       return function() { // 这就是老板给你的配方
           return count++;
       };
   }
   const counter = createCounter(); // 你拿到了配方
   console.log(counter()); // 输出0，就像你用配方做出了第一个面包
   console.log(counter()); // 输出1，第二个面包也出炉啦
   
   作者：G等你下课
   链接：https://juejin.cn/post/7504131186811519002
   来源：稀土掘金
   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
   ```

4. 返回值

   return不能换行写 如下是错误的

   ```javascript
   function create(a,b){
       return // 不会向下执行了
       a + b
   }
   ```

5. 作用域 （局部作用域，在函数中定义的变量只能在函数的作用域中被使用）

   作用：作用域的使用提高了代码的逻辑，增强了程序的可靠性，减少了名字的冲突

   作用域的生命周期：函数作用域的生命周期是从函数被调用开始，到函数执行完毕结束。

   函数作用域的变量不会被外部变量影响。函数作用域的变量不会被提升到函数外部。

   <script>全局</script> 

   ```javascript
   function foo(b){//形参是局部变量
       let a = 1
       console.log(a)
   }
   foo() // 1
   console.log(a) // ReferenceError: a is not defined
   ```

   特殊情况 ： 如果在**函数内部或代码块中**没有声明直接赋值，也当全局变量来看，但这种写法是不推荐的

   ```javascript
   function add(){
       num = 10
   }
   add()
   console.log(num) // 10
   num = 20
   console.log(num) // 20
   ```

   **若全局变量名和局部变量名相同**，按就近原则来使用（**哪个离当前作用域近用哪个**）

   ```javascript
   // 变量名相同
   let m = 10
   function su(){
       let m = 20
       function foo(){
           let m = 30
           console.log(m) // 30
       }
       console.log(m) // 20
   }
   ```

6. 具名函数与匿名函数

   ```javascript
   
   ```



## 逻辑中断

------

逻辑中断主要指的是在逻辑运算时，根据前面操作数的结果，后面的操作数无需再计算。常见的逻辑中断运算符有 && （逻辑与）和 || （逻辑或）。



## Boolean类型的转换

------

```javascript
console.log(Boolean('pink')) // true
console.log(Boolean('')) // false 只有当字符串为空时
console.log(Boolean(0)) // false 只有当数字为0时才为空
console.log(Boolean(1)) // true
console.log(Boolean(2)) // true
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean(null)) // false
console.log(Boolean({})) // true
console.log(Boolean([])) // true
```

