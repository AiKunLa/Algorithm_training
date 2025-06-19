/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const result = [];
  const path = [];
  const back = function (start) {
    if (path.length > 1) {
      result.push([...path]);
    }
    // 必须从左到右
    const set = new Set();
    for (let i = start; i < nums.length; i++) {
      // 同一层不能重复 应该判断当前层是否已经使用过该元素 即为 start ~ i
      if (i > start && set.has(nums[i])) continue;
      if (path.length === 0 || nums[i] >= path[path.length - 1]) {
        path.push(nums[i]);
        back(i + 1);
        path.pop();
        set.add(nums[i]);
      }
    }
  };
  back(0);
  return result;
};
console.log(findSubsequences([4, 6, 7, 7]));
