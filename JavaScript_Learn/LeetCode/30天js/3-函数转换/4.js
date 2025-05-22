function memoize(fn) {
  //以参数作为key，以结果和调用次数作为value
  //讲参数转换为字符串作为key，因为对象不能作为key
  let count = 0;
  const myMap = new Map();
  return function (...args) {
    // 参数为空则返回函数调用次数
    if (args.length === 0) return count;
    let key = args.join();
    // 参数不为空且参数与上次调用的参数不同则调用fn并保存参数和结果
    if (myMap.has(key)) {
      return myMap.get(key);
    }
    //若参数不同这调用函数并存储结果
    let result = fn(...args);
    myMap.set(key, result);
    count++;
    return result;
  };
}

let add = function (a, b) {
  return a + b;
};
let memoizedAdd = memoize(add);
memoizedAdd(1, 2); // 3
memoizedAdd(1, 2); // 3
