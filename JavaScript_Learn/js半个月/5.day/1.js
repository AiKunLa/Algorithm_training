// 函数作用域
// 函数作用域是指在函数内部定义的变量只能在函数内部访问，外部无法访问。
// 函数作用域的生命周期是从函数被调用开始，到函数执行完毕结束。
// 函数作用域的变量不会被提升到函数外部。
// 函数作用域的变量不会被外部变量影响。
// 函数作用域的变量不会被外部函数影响。

// 函数作用域的例子
function foo() {
  let a = 1;
  console.log(a);
}
foo(); // 1
console.log(a); // ReferenceError: a is not defined

function add() {
  num = 10;
}
add();
console.log(num); // 10
num = 20;
console.log(num); // 20

// 变量名相同
let m = 10;
function su() {
  let m = 20;
  function foo() {
    let m = 30;
    console.log(m); // 30
  }
  console.log(m); // 20
}

// 匿名函数
let btn = document.querySelector("button");
btn.onclick = (function () {
  console.log("click");
})
(
  //  立即执行函数
  function () {
    let num = 10; //
    console.log("立即执行函数");
  }
)
()
(function () {
  let num = 20; //
  console.log("立即执行函数");
})();
