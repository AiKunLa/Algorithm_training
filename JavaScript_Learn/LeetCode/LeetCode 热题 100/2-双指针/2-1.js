var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(arr));
