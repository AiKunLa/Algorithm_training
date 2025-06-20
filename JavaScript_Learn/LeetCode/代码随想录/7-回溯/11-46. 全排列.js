/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let n = nums.length;
  const result = [];
  const path = [];
  const memorize = new Set();
  const back = function () {
    if (path.length === n) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < n; i++) {
      // 扫描时跳过已经被使用过的
      if (memorize.has(nums[i])) continue;
      memorize.add(nums[i]);
      path.push(nums[i]);
      back();
      path.pop();
      memorize.delete(nums[i]);
    }
  };
  back();
  return result;
};
console.log(permute([1, 2, 3]));
