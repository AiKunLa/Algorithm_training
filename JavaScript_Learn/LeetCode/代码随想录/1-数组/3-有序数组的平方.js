var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1; // 指向新数组的最后一个元素，即最大的元素
  const newNums = new Array(nums.length);
  while (left <= right) {
    let leftNum = nums[left] ** 2;
    let rightNum = nums[right] ** 2;
    if (leftNum > rightNum) {
      newNums[index] = leftNum;
      left++;
    } else {
      newNums[index] = rightNum;
      right--;
    }
  }

  return newNums;
};
const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));
