/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // 数组
  let left = 0;
  let right = s.length-1;
  while (left < right) {
    let temp = s[left];
    s[left++] = s[right];
    s[right--] = temp;
  }
};

const s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s);