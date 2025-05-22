var moveZeroes = function (nums) {
  let left = 0; //指向最左边的0
  let right = 1; //指向离左边最近的非0
  // left寻找0，right寻找非0，交换
  // 当right到达数组末尾，结束
  while (right <= nums.length - 1) {
    // left指向0 right指向非0
    if (nums[left] === 0 && nums[right] !== 0) {
      // 左0有数
      // 交换
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
    } else {
      // 当left指向的是0，right指向的也是0，right++，继续寻找
      if (nums[left] === 0 && nums[right] === 0) {
        // 左0右0
        right++;
      }
      // 当left指向的是非0，right指向是0，left++，right++，继续寻找
      if (nums[left] !== 0 && nums[right] === 0) {
        //左数右0
        left++;
        right++;
      }
      // 当left指向的是非0，right指向的是非0，left++，right++，继续寻找
      if (nums[left] !== 0 && nums[right] !== 0) {
        // 左数右数
        left++;
      }
    }
  }
  return nums;
};

let arr = [2, 1];
console.log(moveZeroes(arr));
