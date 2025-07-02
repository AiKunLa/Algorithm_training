/**
 * 最小跳跃次数
 * 题目保证可以到达 nums[n-1]
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 0;
  // 用最少的步数去增加覆盖范围
  let stepNum = 0; // step
  // 跳到i+num[i]之中能使覆盖范围最大化的位置
  let i = 0;
  let maxRang = 0;
  let rang = 0;
  while (maxRang < nums.length - 1) {
    // 当前能覆盖的范围
    rang = i + nums[i];
    if(rang >= nums.length-1) return stepNum+1
    // 跳
    for (let j = i + 1; j <= rang; j++) {
      let countRange = j + nums[j];
      if (maxRang < countRange) {
        maxRang = countRange;
        i = j;
      }
    }
    stepNum++;
  }
  if (i === nums.length-1) return stepNum;
  return stepNum + 1;
};
