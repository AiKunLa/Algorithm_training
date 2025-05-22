function getMaxOrMin(arr, type) {
  let result = arr[0];
  if (type === 0) {
    //Max
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > result) result = arr[i];
    }
  } else if (type === 1) {
    //Min
    //Max
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < result) result = arr[i];
    }
  } else {
    return "type error";
  }
  return result;
}
let arr = [8, 6, 9, 2, 5, 8, 1, 5, 6, 3, 4];
console.log(getMaxOrMin(arr, 0)); // 9
console.log(getMaxOrMin(arr, 1)); // 1
console.log(getMaxOrMin(arr, 2)); // type error
