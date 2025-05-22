## 运算符

------

1. 自增运算符

   ```javascript
           //加号 等号运算符  += -= *= /= %=
           
   
           //一元运算符  ++ -- 前置后置
           let q = 1
           console.log(++q) //先加后用 2
           console.log(q++) //先用后加 2 
           console.log(q) //3
           
   ```

2. 比较运算符

   == 运算符 会将两个操作数转换为同类型后再比较

   === 运算符 两个操作数的值和类型都要相同

   !== 不全等于 类型和值都不相等  两个操作数只要类型和值有一个不同 即为true

   != 不等于 只要值不相等就可以  两个操作数

   ```javascript
           //比较运算符  > < >= <= == === != !==
           // === 全等于 类型和值都要相等
           // == 等于 只要值相等就可以
           if(q === '1') console.log('q等于1') //false
           if(q === 1) console.log('q等于1') //true
   
   		//（相等运算符）会进行宽松比较，即尝试将两个操作数 转换为相同类型后 再比较值。
           q  = 1
           if(q == '1') console.log('q等于1') //true
   		
   
   
           // !== 不全等于 类型和值都不相等
           //!= 不等于 只要值不相等就可以
           if(q !== '1') console.log('q不等于1') //true
           if(q !== 1) console.log('q不等于1') //false
   ```

3. 位运算符

   与 或 （二元）   非（一元）

   ```javascript
   //&&  一个false   全为fasle
   //||  一个true 全为true
   ```

4. 三元运算符

   三元运算符 条件? 表达式1 : 表达式2

   ```javascript
         // 三元运算符 条件? 表达式1 : 表达式2
         let a = Number(prompt("请输入第一个数字"));
         //判断是否是数字
         let b = Number(prompt("请输入第二个数字"));
         //取两个数的最大值
         let c = a > b ? a : b;
         console.log(c);
   ```



## 循环

------

1. switch

   ```javascript
         let num = Number(prompt("请输入一个数字")); //输入的是字符串类型 10
         switch (num) {
           case num === 1:
             console.log("num等于1");
             break; //跳出switch语句
           case num === 2:
             console.log("num等于2");
             break; //跳出switch语句
           case num === 3:
             console.log("num等于3");
             break; //跳出switch语句
           default: //默认情况
             console.log("num不等于1,2,3");
             break; //跳出switch语句
         }
   ```

2. while

   ```javascript
         
   // continue  跳过当前循环 进入下一个循环
   // break 结束循环
   let add = 0;
         let oNum = 0;
         let num = 1;
         while (num <= 100) {
           if (num % 2 === 0) oNum += num;
           add += num;
           document.write(num + "&nbsp;"); //1-100
           num++;
         }
         doucment.write("<hr>");
         console.log("1~100的和为" + add); //5050
         console.log("1~100的偶数和为" + oNum); //2550
   ```

3. for循环

   ```javascript
   let add = function (a) {
     let sum = 1;
     for (let i = 1; i <= a; i++) { // let i = 1 只执行一次
       sum *= i;
     }
     return sum;
   };
   
   console.log(add(5)); // 输出 120
   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   
   let erFen = function (arr, target) {
     let left = 0;
     let right = arr.length - 1
     while(left <= right){
       let mid = Math.floor((left + right) / 2);
       if(arr[mid] === target){
         return mid;
       }else if(arr[mid] < target){
         left = mid + 1;
       }else{
         right = mid - 1;
       }
     }
   };
   
   let print99 = function () {
     for (let i = 1; i <= 9; i++) {
       for (let j = 1; j <= i; j++) {
         process.stdout.write(`${j}*${i}=${i * j}\t`);
       }
       process.stdout.write("\n");
     }
   };
   
   print99();
   
   ```
   
   

## 数组

------

使用const来声明数组

1. 声明

   ```javascript
   // 两种声明方式
   let arr = [1,'g',5,true,'f',false,[[1,2,3],[4,5,6],[7,8,9]]] 
   let arr1 = new Array(1,2,3,4,5,6,7,8,9)
   // 1.遍历数组
   // 2.判断数组元素是否为数组
   // 3.如果是数组，递归调用
   // 4.如果不是数组，直接输出
   let flat = function(arr){
     for(let i = 0; i < arr.length; i++){
       if(Array.isArray(arr[i]))
           flat(arr[i])
       else
           console.log(arr[i])
     }
   }
   flat(arr)
   ```

2. 数组的基本操作

   1. 添加元素

   ```javascript
   // 1.添加元素
   arr1.push(10) // 末尾添加元素
   console.log(arr1); // [1,2,3,4,5,6,7,8,9,10]
   
   arr1.unshift(0) // 开头添加元素
   console.log(arr1); // [0,1,2,3,4,5,6,7,8,9,10]
   
   arr1.splice(5,0,5.5) // 在索引为5的位置添加元素5.5   （位置，是否删除原来的元素0/1,要添加的元素）
   console.log(arr1); // [0,1,2,3,4,5.5,5,6,7,8,9,10]
   
   arr1.splice(5,1,5.5) // 在索引为5的位置添加元素5.5,并删除原来的元素
   console.log(arr1); // [0,1,2,3,4,5.5,6,7,8,9,10]
   
   arr1.splice(5,1,5.5,5.6) // 在索引为5的位置添加元素5.5,5.6,并删除原来的元素
   console.log(arr1); // [0,1,2,3,4,5.5,5.6,6,7,8,9,10]
   arr1.splice(5,1,5.5,5.6,5.7) // 在索引为5的位置添加元素5.5,5.6,5.7,并删除原来的元素
   console.log(arr1); // [0,1,2,3,4,5.5,5.6,5.7,6,7,8,9,10]
   ```

   2. 删除元素

      ```javascript
      arr1.pop() // 删除末尾元素
      
      arr1.shift() // 删除开头元素
      
      arr1.splice(5,1) // 删除索引为5的元素
      
      arr1.splice(5,1,5.5,5.6,5.7) // 删除索引为5的元素,并添加元素5.5,5.6,5.7
      
      ```

   3. 修改元素

      ```javascript
      arr1[5] = 5.5 // 修改索引为5的元素为5.5
      ```

   4. 查找元素

      ```javascript
      console.log(arr1.indexOf(5.5)) // 查找元素5.5的索引
      console.log(arr1.lastIndexOf(5.5)) // 查找元素5.5的索引,从后往前查找
      console.log(arr1.includes(5.5)) // 查找元素5.5是否存在,返回true或false
      ```

   5. 排序

      ```javascript
      arr1.sort() // 排序
      console.log(arr1); // [0,1,2,3,4,5.5,5.6,5.7,6,7,8,9,10]
      arr1.sort((a,b)=>b-a) // 排序,从小到大
      console.log(arr1); // [10,9,8,7,6,5.7,5.6,5.5,4,3,2,1,0]
      ```

   6. 反转

      ```javascript
      arr1.reverse() // 反转
      ```

   7. 拼接

      ```javascript
      arr1.concat([11,12,13]) // 拼接
      console.log(arr1); // [10,9,8,7,6,5.7,5.6,5.5,4,3,2,1,0,11,12,13]
      arr1.concat([11,12,13],14,15,16) // 拼接
      console.log(arr1); // [10,9,8,7,6,5.7,5.6,5.5,4,3,2,1,0,11,12,13,14,15,16]
      ```

   8. 截取

      ```javascript
      arr1.slice(5,10) // 截取索引为5到10的元素,不包括10
      console.log(arr1); // [10,9,8,7,6,5.7,5.6,5.5,4,3,2,1,0,11,12,13,14,15,16]
      ```

   9. 复制

      ```javascript
      arr1.copyWithin(5,10,15) // 复制索引为10到15的元素到索引为5的位置,不包括15
      console.log(arr1); // [10,9,8,7,6,11,12,13,14,15,16,1,0,11,12,13,14,15,16]
      ```

   10. 判断是否为数组

       ```javascript
       console.log(Array.isArray(arr1)); // true
       ```



