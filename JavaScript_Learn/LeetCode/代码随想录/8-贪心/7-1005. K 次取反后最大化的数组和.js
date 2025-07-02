/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  // 选择最小的负数 将其变为正式 若遇到0 其k不为0 则一直对0 进行变换
  nums.sort((a, b) => a - b); // 小到大
  let add = 0;
  for (let i = 0; i < nums.length; i++) {
    // 小于0
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i];
      k--;
      // 变换后比后面的数小
      if (nums[i] < nums[i + 1] && k % 2 === 1) {
        nums[i] = -nums[i];
        k = 0;
      }
    } else if (nums[i] === 0) {
      // 等于0
      k = 0;
    } else if (k > 0 && nums[i] > 0 && k % 2 === 1) {
      // 大于0 且k为奇数
      nums[i] = -nums[i];
      k = 0;
    }
    if (i === nums.length - 1 && k % 2 === 1) {
      nums[i] = -nums[i];
    }

    add += nums[i];
  }
  return add;
};

console.log(largestSumAfterKNegations([-8, 3, -5, -3, -5, -2], 6));
