/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const strArr = s.split("");
  let n = strArr.length;
  for (let i = 0; i < n; i += 2 * k) {
    let left = i;
    let right = i + k - 1;
    if (left > n - 1) {
      left = n - 1;
    }
    while (right > left) {
      let temp = strArr[left];
      strArr[left++] = strArr[right];
      strArr[right--] = temp;
    }
  }
  return strArr.join("");
};
