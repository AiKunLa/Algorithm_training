/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  //  统计波峰波谷的数量
  if (nums.length < 2) return nums.length;

  let preTrend = nums[1] - nums[0];
  let reLen = preTrend !== 0 ? 2 : 1;
  for (let i = 2; i < nums.length; i++) {
    let curTrend = nums[i] - nums[i - 1];
    //  当出现波谷或者波峰时，更新preTrend
    if ((preTrend <= 0 && curTrend > 0) || (preTrend >= 0 && curTrend < 0)) {
      preTrend = curTrend;
      reLen++;
    }
  }
  return reLen;
};
