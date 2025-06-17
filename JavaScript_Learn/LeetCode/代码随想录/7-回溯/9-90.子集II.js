/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const result = [];
  const path = [];
  nums.sort((a, b) => a - b);
  const back = function (start) {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      path.push(nums[i]);
      back(i + 1);
      path.pop();
    }
  };
  back(0);
  return result;
};
console.log(subsetsWithDup([1, 2, 2]));
