/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  let collect = [];

  const back = function (num, start) {
    if (num === target) {
      result.push([...collect]);
      return;
    }
    if (num > target) return;
    for (let i = start; i < candidates.length; i++) {
      collect.push(candidates[i]);
      back(num + candidates[i], i);
      collect.pop();
    }
  };
  back(0, 0);
  return result;
};
