var maxArea = function (height) {
  let maxCent = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let temp = Math.min(height[i], height[j]) * (j - i);
      maxCent = maxCent > temp ? maxCent : temp;
    }
  }
  return maxCent;
};

let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(arr));

// 最左边最大，最右边最大
