/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 遍历0~k-1个元素 放入队列 若当前元素比队首大则队首元素出队列
  const queue = [];
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i < k) {
      while (queue.length !== 0 && queue[0] < nums[i]) {
        queue.shift();
      }
      queue.push(nums[i]);
      if (i === k - 1) result.push(queue[0]);
    } else {
      if (queue[0] === nums[i - k]) queue.shift();
      while (
        queue.length !== 0 &&
        (queue[0] < nums[i] || queue[0] < queue[queue.length - 1])
      ) {
        queue.shift();
      }
      let j = 1;
      while (j < queue.length) {
        while (j != 0 && queue[j] > queue[0]) {
          queue.shift();
          j--;
        }
        j++;
      }
      queue.push(nums[i]);
      result.push(queue[0]);
    }
  }
  return result;
};

const nums = [1, 3, 1, 2, 0, 5];
const num2 = [1];
console.log(maxSlidingWindow(nums, 3));
