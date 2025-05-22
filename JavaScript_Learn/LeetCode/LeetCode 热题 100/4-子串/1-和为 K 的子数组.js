var subarraySum = function (nums, k) {
  let left = 0;
  let right = 0;
  let addResult = 0;
  let totalNum = 0;
  while (right < nums.length) {
    //当前数大于k 且 之前的结果大于0 则直接右移指针
    if (nums[right] > k && addResult > 0) {
      right++;
      left = right;
    } else if (nums[right] === k && addResult === 0) {
      //当前数等于k 且之前的结果等于0 则直接右移指针
      totalNum++;
      right++;
      left = right;
    } else {
      addResult += nums[right];
      if (addResult === k) {
        totalNum++;
        addResult = 0;
        left++; //左指针右移
        right = left;
      } else if (addResult > k) {
        left++;
        right = left;
        addResult = 0;
      } else {
        right++;
      }
    }
  }

  return totalNum;
};

console.log(subarraySum([-1, -1, 1], 0));
