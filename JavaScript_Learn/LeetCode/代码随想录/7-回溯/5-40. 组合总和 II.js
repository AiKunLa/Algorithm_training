/**
 * candidates 中的每个数字在每个组合中只能使用 一次
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  //结果集
  const result = [];
  //路径
  const path = [];
  // 排序
  candidates.sort((a, b) => a - b);
  const back = function (start, num) {
    if (num === target) {
      result.push([...path]);
      return;
    }
    if (num > target) return;
    for (let i = start; i < candidates.length; i++) {
      // 去重
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      // 剪枝
      if (num + candidates[i] > target) break;
      path.push(candidates[i]);
      back(i + 1, num + candidates[i]);
      path.pop();
    }
  };
  back(0, 0);
  return result;
};
// console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
