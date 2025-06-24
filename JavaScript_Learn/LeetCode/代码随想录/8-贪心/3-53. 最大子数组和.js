/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 定义状态  sumSub[i] 表示以num[i] 结尾的连续子序列之和的最大值   用maxSum 记录sumSub中的最大值
  // 状态转移方程 若sumSub[i] = sumSub[i-1] + nums[i] < nums[i]?nums[i]:sumSub[i-1] + nums[i]
  // 初始化 sumSub[0] = nums[0]  maxSum = sumSub[0]
  //输出 sumSub
  const n = nums.length;
  if (n === 1) return nums[0];
  if (n === 0) return 0;

  const sumSub = new Array(n).fill(0);
  sumSub[0] = nums[0];
  let maxSum = sumSub[0];
  for (let i = 1; i < n; i++) {
    let add = sumSub[i - 1] + nums[i];
    sumSub[i] = add > nums[i] ? add : nums[i];
    maxSum = maxSum > sumSub[i] ? maxSum : sumSub[i];
  }
  return maxSum;
};

var maxSubArray = function (nums) {
  // 定义状态  sumSub[i] 表示以num[i] 结尾的连续子序列之和的最大值   用maxSum 记录sumSub中的最大值
  // 状态转移方程 若sumSub[i] = sumSub[i-1] + nums[i] < nums[i]?nums[i]:sumSub[i-1] + nums[i]
  // 初始化 sumSub[0] = nums[0]  maxSum = sumSub[0]
  //输出 sumSub
  const n = nums.length;
  if (n === 1) return nums[0];
  if (n === 0) return 0;

  let preSub = nums[0];
  let maxSum = preSub;

  for (let i = 1; i < n; i++) {
    let curSub = preSub + nums[i];
    preSub = curSub > nums[i] ? curSub : nums[i];
    maxSum = maxSum > preSub ? maxSum : preSub;
  }
  return maxSum;
};
