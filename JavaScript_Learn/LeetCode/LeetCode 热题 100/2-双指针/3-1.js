/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];
  // 排序去重
  nums.sort((a, b) => a - b);
  console.log(nums);
  let resultArr = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > 0) break;
    // 第一个数先不去重
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        resultArr.push([nums[i], nums[left], nums[right]]); // 放入结果
        while (left < right && nums[left] === nums[left + 1]) {
          // 指针移动去重
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          // 指针移动去重
          right--;
        }
        left++; // 指针移动
        right--; // 指针移动
      } else if (sum < 0) {
        // 若小于0，则左指针右移
        left++;
      } else {
        // 若大于0，则右指针左移
        right--;
      }
    }
  }
  return resultArr;
};
let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
