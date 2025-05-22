// 函数

// 1.封装代码

// 2.复用代码

// 3.模块化
// 4.闭包

// 函数声明
let add = function (a, b) {
  return a + b;
};
function add1(a, b) {
  return a + b;
}
let add2 = (a, b) => {
  return a + b;
};

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
}

function noReturn() {
  console.log("This function has no return statement");
}

const result = noReturn();

console.log(result); // 输出undefined

// 当函数既有普通参数，又有剩余参数时，剩余参数必须放在参数列表的最后
// 面包材料有哪些 
