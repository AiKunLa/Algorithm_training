let sum = function (a, b) {
  // 判断a和b是否为数字
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "参数类型错误";
  }
};

let add = function (a) {
  let sum = 1;
  for (let i = 1; i <= a; i++) {
    sum *= i;
  }
  return sum;
};

//遍历数组
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

console.log(add(5)); // 输出 120
console.log(sum(1, 2)); // 输出 3
console.log("123");
