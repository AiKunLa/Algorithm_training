## 变量

------

### var与let的区别

var声明 ： 

- 可以先使用，在声明之前
- var声明过的变量可以重复声明（不合理之处）
- 会有变量提升、全局变量、没有块级作用域

如何使用：尽量使用let

## 数组Array的基本使用

------

#### 声明方式

```javascript
let arr = [] //arr -> 变量  []-> 子面量

let arr = [1,2,3,5,4,6,8]
//索引获取数组元素 索引以0开始
console.log(arr[0]); // 1

//定义一个数组，里面存放星期一到星期日
let week = ["星期一","星期二","星期三","星期四","星期五","星期六","星期日"];
console.log(week[0]); // 星期一

//获取数组长度
console.log(week.length)

```

## 常量

------

- 概念：使用const声明的变量称为常量

- 使用场景：当某个变量永不改变时就可以使用 （不需要重新赋值时）

- 命名规范和变量一致

- 常量的使用

  ```javascript
  const G = 9.8
  console.log(G)
  ```

- 常量不允许从新赋值，声明时必须赋值

## 数据类型

- 基本数据类型

  1. 数字类型

     ```javascript
     //number 数字型  与java不同，在javascript中不论是整数、小数都归为数字型
     //javascript是一种弱数据类型的语言（赋值之后才知道该变量是什么数据类型），java是一种强数据类型（声明时便定下了变量的数据类型）
     ```

  2. NaN （无意义 不管与什么样的数据类型经行运算都是NaN）

     ```javascript
     let n = 'aad' - 5 //NaN
     ```

  3. 字符串

  ```javascript
  //通过单引号''或者"" `` 引用的都是字符串类型数据  引号会找与他最近的来匹配，外单内双 、内双为单
  let str1 = 'danyin'
  let str2 = "shuangyin"
  let str3 = `中文`
  
  //字符拼接 （）
  let age = 18
  console.log('I am'+age+'year')
  doucment.write('I am '+age+' year old')
  
  //模板字符串
  let money = 5000
  document.write(`I have ${money} money`)
  
  // 案例
  let name = prompt("请输入你的名字");
  let age = prompt("请输入你的年龄");
  document.write(`我的名字是${name},我的年龄是${age}`);
  
  //string 字符串型
  //boolean 布尔型
  //undefined 未定义型
  //null 空类型
  
  // 字符串切割
  function getType(obj) {
    // 字符串截取
    // 8~type.length-1 截取字符串
    return Object.prototype.toString.call(obj).slice(8, type.length - 1); // 左闭右开
  }
  ```

   4. boolen  (对与错)

      ```javascript
      // true 与 false
            let tag = true;
            console.log(tag);
            console.log(typeof tag);
            // 布尔值只有两个值 true 和 false
            // 布尔值可以由其他值转换而来
            // 0 NaN null undefined '' 转换为 false
            // 其他值转换为 true
            console.log(Boolean(0));
            console.log(Boolean(NaN));
            console.log(Boolean(null));
      ```

   5. undefined （为定义类型）在js中未被赋值的 

      ```javascript
      console.log(undefined + 1) //NaN   
      ```

   6. null 空   （undefined表示未被赋值  null表示被赋值了但是内容为空 空值）null作为变量里面是对象但是为创建

      ```javascript
      console.log(null + 1) //1
      ```

   7. 检测数据类型

      ```javascript
            let age = 18;
            console.log(typeof age) // number
            console.log(typeof 'hello') // string
            console.log(typeof true) // boolean
            console.log(typeof undefined) // undefined
            console.log(typeof object)// object
      let age = 8
      typeof age
      ```

   8. 数据类型转换

      ```javascript
              // prompt() 弹出一个输入框，让用户输入数据，返回值是用户输入的数据
              // 注意：prompt() 方法的返回值是字符串类型，即使用户输入的是数字，也会被转换成字符串类型
              let num = prompt("请输入一个数字");
              console.log(typeof num); // string
      
      //隐式转换
            //隐式转换：将字符串转换成数字
            // 加号 + 将数字转换成字符串 只有+号可以将数字转换成字符串，其他的符号都不能将数字转换成字符串
            console.log(1 + 1); // 2
            console.log(1 + "1"); // 11
      	//特别情况
            let type1 = +"123";
            console.log(typeof type1); // number
      
            // 减号 - 将数字类型的字符串转换成数字  其他运算符也可以
            console.log(1 - 1); // 0
            console.log(1 - "1"); // 0
      //显式转换
      
            //显示转换：将数字转换成字符串
            //转为数字类型
            let str = Number("123");
            console.log(typeof str); // number NaN也是number类型的数据，代表非数字
      
            // 转为整数类型 只保留整数部分，小数部分舍弃
            parseInt(1.2); // 1
            parseInt('3.2') // 3
            parseInt('12sd') // 12
            parseInt('sd12') // NaN
      
      
            // 转为浮点数类型 保留小数部分
            parseFloat(1.2); // 1.2
            parseFloat('3.2') // 3.2
      	  parseFloat('12.25sd') // 12.25  只有前面式数字
            parseFloat('sd12') // NaN
      
            //转为字符串类型
            let type3 = String(123);
            console.log(typeof type3); // string
            //转为布尔类型
            let type4 = Boolean(123);
            console.log(typeof type4); // boolean
            //转为undefined类型
            let type5 = undefined(123);
            console.log(typeof type5); // undefined
            //转为null类型
            let type6 = null(123);
            console.log(typeof type6); // object
      
      ```

      

- 引用数据类型

  ```javascript
  //object 对象
  ```

  