/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) return [];
  const result = [];
  nums.sort((a, b) => a - b); // 排序
  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] > target && target >= 0) break; // 截断
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重

    for (let j = i + 1; j < nums.length - 2; j++) {
      // 截断
      if (nums[j] > target - nums[i] && target > 0) break;
      if (j > i + 1 && nums[j] === nums[j - 1]) continue; // 去重
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        let add = nums[i] + nums[j] + nums[left] + nums[right];
        if (add === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (add < target) {
          while (left < right && nums[left] === nums[left + 1]) left++;
          left++;
        } else {
          while (left < right && nums[right] === nums[right - 1]) right--;
          right--;
        }
      }
    }
  }
  return result;
};
