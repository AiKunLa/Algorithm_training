/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // 组合长度
  let k = digits.length;
  if (k === 0) return [];
  // 映射关系
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  // 遍历集
  const path = [];
  // 确保 digits 不为空，避免不必要的遍历
  for (let i = 0; i < k; i++) {
    path.push(map[digits[i]]);
  }
  // 结果集
  const result = [];
  // 搜集集
  const str = [];
  const back = function (start) {
    if (str.length === k) {
      result.push(str.join(""));
      return;
    }
    for (let i = 0; i < path[start].length; i++) {
      str.push(path[start][i]);
      back(start + 1);
      str.pop();
    }
  };
  back(0);
  return result;
};