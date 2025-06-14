/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  let ph = [];
  const back = function (start) {
    // 终止条件
    if (ph.length === k) {
      // 拷贝一份ph 加入到result中 防止所有组合关联到同一结果 （最后的ph一定为[]）
      result.push([...ph]);
      return;
    }
    // 横向循环 纵向递归
    for (let i = start; i <= n; i++) {
      // 剪纸
      if (ph.length + n - i + 1 < k) break;
      ph.push(i);
      back(i + 1);
      ph.pop();
    }
  };
  back(1);
  return result;
};
console.log(combine(4, 2));
