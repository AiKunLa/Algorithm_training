// 两数和为
var twoSum = function (nums, target) {
  // Map  key为值 vale 为索引
  const myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    myMap.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    let vl = target - nums[i];
    if (myMap.has(vl) && myMap.get(vl) !== i) {
      return [i, myMap.get(vl)];
    }
  }
};
