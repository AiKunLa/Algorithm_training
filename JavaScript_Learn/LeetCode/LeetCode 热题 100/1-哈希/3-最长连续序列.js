var longestConsecutive = function (nums) {
  // 去重
  const mySet = new Set(nums);
  // 最大长度
  let maxLength = 0;
  for (const num of mySet) {
    // 只有当num-1不存在时，才开始计算
    if (!mySet.has(num - 1)) {
      let currentNum = num;
      let currentMaxLength = 1;
      // 以num为起点计算长度
      while (mySet.has(++currentNum)) {
        currentMaxLength++;
      }
      // 取更大的
      if (currentMaxLength > maxLength) {
        maxLength = currentMaxLength;
      }
    }
  }
  return maxLength;
};

let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums));
