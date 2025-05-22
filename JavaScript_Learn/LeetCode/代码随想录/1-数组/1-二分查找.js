var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;
    while (left <= right) {
      mid = Math.floor(left + right) / 2;
      if (nums[mid] > target) right = mid - 1;
      else if (nums[mid] < target) left = mid + 1;
      else return mid;
    }
    return -1;
  };

  function main() {
    let nums = [-1, 0, 3, 5, 9, 12];
    let target = 9;
    console.log(search(nums, target));
  }
