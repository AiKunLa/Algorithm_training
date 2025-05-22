var threeSum = function (nums) {
  if (nums.length < 3) return [];
  let resultArr = [];
  let first = 0;
  let second = 1;
  let third = 2;
  while (first < nums.length - 2) {
    // 相加为0 出入结果
    if (nums[first] + nums[second] + nums[third] === 0) {
      resultArr.push([nums[first], nums[second], nums[third]]); // 放入结果
      second++; // 第二个指针移动，不移动第三个指针，以为前两个已经确定了，第三个数是固定的
      third = second + 1;
    } else {
      third++; //若不符合要求，则第三个指针移动
    }
    if (second === nums.length - 1) {
      // 若第二个指针到了末尾
      first++;
      second = first + 1;
      third = second + 1;
    }
    if (third === nums.length) {
      // 若第三个指针到了末尾
      second++;
      third = second + 1;
    }
  }
  return resultArr;
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
