var minSubArrayLen = function (target, nums) {
  let left = 0; // 滑动窗口的左边界
  let sum = 0; // 滑动窗口内元素的和
  let minLength = nums.length + 1; // 最小子数组的长度，初始值设为正无穷大
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    if (sum >= target) {
      minLength = minLength > right - left + 1 ? right - left + 1 : minLength;
    }
    while (sum >= target) {
      // 当滑动窗口内元素的和大于等于 target 时，移动左边界
      sum -= nums[left]; // 减去左边界元素的值
      left++; // 左边界右移
      if (sum >= target) {
        // 如果滑动窗口内元素的和大于等于 target，更新最小子数组的长度
        minLength = minLength > right - left + 1 ? right - left + 1 : minLength;
      }
    }
  }
  if (minLength === nums.length + 1) {
    // 如果最小子数组的长度仍为正无穷大，说明不存在满足条件的子数组，返回 0
    return 0;
  }
  return minLength;
};

const nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(7, nums));
