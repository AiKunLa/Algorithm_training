var generateMatrix = function (n) {
  // 创建数组
  const arr = Array(n)
    .fill()
    .map(() => Array(n).fill(0));
  let top = 0;
  let boom = n - 1;
  let left = top;
  let right = boom;
  let end = n * n;
  let i = 1;
  while (i < end) {
    // 上边界
    for (let j = left; j < right; j++) {
      arr[top][j] = i++;
    }
    // 右边界
    for (let j = top; j < boom; j++) {
      arr[j][right] = i++;
    }
    // 下边界
    for (let j = right; j > left; j--) {
      arr[boom][j] = i++;
    }
    // 左边界
    for (let j = boom; j > top; j--) {
      arr[j][left] = i++;
    }
    top++;
    right--;
    boom--;
    left++;
  }

  if (n % 2 === 1) {
    let index = Math.floor(n / 2);
    arr[index][index] = end;
  }
  console.log(arr);

  return arr;
};

generateMatrix(1);
