/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  const path = [];
  const back = function (start) {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      back(i + 1);
      path.pop();
    }
  };
  back(0);
  return result;
};
console.log(subsets([1,2,2]))
