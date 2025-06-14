/**
 * @param {number} k 组合中元素的个数
 * @param {number} n 组合中元素的总和
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = [];
  let ph = [];
  const back = function (sum, start) {
    if (sum > n) return;
    if (ph.length === k) {
      if (sum === n) result.push([...ph]);
      return;
    }
    for (let i = start; i <= 9; i++) {
      sum += i;
      if (sum > n) break;
      ph.push(i);
      back(sum, i + 1);
      ph.pop();
      sum -= i;
    }
  };
  back(0, 1);
  return result;
};
console.log(combinationSum3(3,7))