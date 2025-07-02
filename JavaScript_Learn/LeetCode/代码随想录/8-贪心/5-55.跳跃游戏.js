/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 遍历数组 ，刷新覆盖范围
  let rang = 0;
  // 指针遍历的范围不能超过 覆盖的范围
  for (let i = 0; i <= rang; i++) {
    if (rang >= nums.length - 1) return true;
    let newRang = i + nums[i];
    rang = newRang > rang ? newRang : rang;
  }
 return false;
};
