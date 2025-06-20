/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  //n行n列的二维数组 每一行每列只能放一个皇后 只需要判断斜方向
  const result = []; //结果集
  const colum = new Array(n).fill(false); // 标记列是否被使用
  const check1 = new Array(n * 2 - 1).fill(false); // 左上 右下 行-列的绝对值不变
  const check2 = new Array(n * 2 - 1).fill(false); // 左下 右上 行+列不变
  const path = []; // 路径 存放的是每一行皇后的列

  const back = function (row) {
    if (row === n) {
      result.push(
        // 字符串拼接
        path.map((col) => ".".repeat(col) + "Q" + ".".repeat(n - col - 1))
      );
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!colum[i] && !check1[Math.abs(row - i)] && !check2[row + i]) {
        path[row] = i;
        colum[i] = true;
        check1[Math.abs(row - i)] = true;
        check2[row + i] = true;
        back(row + 1);
        colum[i] = false;
        check1[Math.abs(row - i)] = false;
        check2[row + i] = false;
      }
    }
  };

  back(0);
  return result;
};
