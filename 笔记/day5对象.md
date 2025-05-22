## 对象

------

是什么：**对象是一种数据结构，是一种无序的数据集合**

作用：**用来详细描述某个事物**

1. 对象声明

   ```javascript
   // 第一种声明方式
   let 对象名 = {}
   // 第二种
   let 对象名 = new Object()
   ```

2. 对象的组成：方法+属性

   ```javascript
   let person = {
   	// 属性名：属性值
       name:'gk',
       age:'18'
       gender:'男',
       introduce(){
   		console.log(
         `Hello, my name is ${this.name} and I am ${this.age} years old.`
       );
       }
       function introduce(){ // 再对象重不能这样声明方法，不能使用function来声明方法
   },
   
   }
   ```

3. 对象属性操作——CRUD

   ```javascript
   let person = {
     name: "John",
     age: 30,
     city: "New York",
     sayHello() {
       console.log(
         `Hello, my name is ${this.name} and I am ${this.age} years old.`
       );
     },
   };
   
   // 修改
   person.name = 'ggg'
   person.age = 20
   person.city = 'beijing'
   person.sayHello = function() {
       console.log(
         `Hello, my name is ${this.name} and I am ${this.age} years old.`
       );
   }
   
   // 获取属性 查     （对象名.属性名）（对象名['属性名']） 两种方式都重要
   let person2 = {
     'good-morning': 'hello', // 键名包含特殊字符，需要使用引号括起来
     name: "John",
     age: 30,
     city: "New York",
     sayHello() {
       console.log(
         `Hello, my name is ${this.name} and I am ${this.age} years old.`
       );
     },
   };
   console.log(person2['good-morning']);// hello
   console.log(person2['name']); // John
   console.log(person2['age']); // 30
   person2['sayHello'](); // Hello, my name is John and I am 30 years old.
   ```

4. 遍历对象

   ```javascript
   // 遍历对象
   for (let key in person2) {// key 是string类型的，所以必须使用person2[key]来访问值
     console.log(key, person2[key]); // 输出键和对应的值
   }
   // 输出结果
   good-morning hello
   name John
   age 30
   city New York
   sayHello [Function: sayHello]
   
   // 遍历对象数组
   let arr = [
       {name: '张三', age: 18},
       {name: '李四', age: 19},
       {name: '王五', age: 20} 
   ]
   
   for(let i = 0;i<arr.length;i++){
       for(let key in arr[i]){
           console.log(key,arr[i][key])
       }
   }
   
   
   ```

5. 内置对象 （js内部提供的对象）

   ```javascript
   // Math对象
   console.log(Math.random()*10) // 0-10之间的随机数 左闭右开 并不是整数
   console.log(Math.floor(2.3))// 向下取整
   console.log(Math.ceil(2.3)) // 向上取整
   console.log(Math.round(2.3)) // 四舍五入
   console.log(Math.max(1,2,3,4,5)) // 最大值
   console.log(Math.min(1,2,3,4,5)) // 最小值
   console.log(Math.pow(2,3)) // 2的3次方
   console.log(Math.sqrt(4)) // 根号4
   console.log(Math.abs(-1)) // 绝对值
   
   // 生成N-M直间的随机数
   function myRandom(n,m){
       return Math.floor(Math.random()*(m-n+1))+n;
   }
   // 随机点名
   let arr = ['张三','李四','王五','赵六','田七','周八','吴九','郑十','钱十一','孙十二','李十三','周十四','吴十五','郑十六','钱十七','孙十八','李十九','周二十']
   let index = Math.floor(Math.random()*arr.length)
   console.log(arr[index])
   ```

6. 生成随机颜色

   ```javascript
   function getRandomCollor(flag){
       if(flag|| flag === undefined){
           // 生成16进制的颜色值
           return `#${Math.floor(Math.random()*Math.pow(255,3)).toString(16)}` // 16777215是16进制的ffffff，即255的三次方
       }else{
           return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
       }
   }
   console.log(getRandomCollor(true)) // #4ce1a4
   console.log(getRandomCollor(false)) // rgb(140,69,39)
   
   ```

   

