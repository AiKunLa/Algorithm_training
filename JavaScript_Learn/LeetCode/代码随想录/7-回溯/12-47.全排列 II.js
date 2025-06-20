/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  const path = [];
  const n = nums.length;
  // 排序让相同的数挨在一起
  nums.sort((a, b) => a - b);
  const used = new Array(n).fill(false);
  const back = function (nums, used) {
    if (path.length === n) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < n; i++) {
      // 树层去重 当当前元素与前一个元素相同，且前一个元素未被使用时，跳过当前元素 。
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) continue;//树层去重
      if (used[i] === true) continue;// 树枝去重
      used[i] = true;
      path.push(nums[i]);
      back(nums, used);
      used[i] = false;
      path.pop();
    }
  };
  back(nums, used);
  return result;
};
console.log(permuteUnique([1,1,2]))