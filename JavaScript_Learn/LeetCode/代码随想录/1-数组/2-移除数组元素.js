// 方法一：暴力解法
var removeElement = function (nums, val) {
  // 定义一个新的数组，遍历nums将不等于val的数加入到新数组中
  const newNUms = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      count++;
      newNUms.push(nums[i]);
    }
  }
  for (let i = 0; i < newNUms.length; i++) {
    nums[i] = newNUms[i];
  }
  return count;
};

// 方法二：双指针法

var removeElement2 = function (nums, val) {
  // 首尾各一个指针，左边找元素等于val的数，右边找元素不为val的数（两边在找的时候记录元素不为val的个数），两边找到后交交换数据即可

  if (nums.length === 0 || nums === null) {
    return 0;
  }

  var size = nums.length;
  var left = 0;
  var right = size - 1;
  while (left <= right) {
    while (left <= right && nums[left] !== val) {
      left++;
    }
    while (left <= right && nums[right] === val) {
      right--;
    }
    if (left <= right) {
      var tmp = nums[left];
      nums[left] = nums[right];
      nums[right] = tmp;
      left++;
      right--;
    } else {
      break;
    }
  }
  return left;
};
// 方法三：快慢指针法
var removeElement3 = function (nums, val) {
    // 将暴力法的两步结合到一步
  // 快慢指针法，快指针找元素不等于val的数，慢指针指向元素等于val的数，找到后交换数据即可
  let fast = 0; //指向原数组
  let slow = 0; // 指向新数组
  let count = 0;
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
      count++;
    }
    fast++;
  }
  return count;
};

const nums = [1];
console.log(removeElement3(nums, 1));
console.log(nums);
