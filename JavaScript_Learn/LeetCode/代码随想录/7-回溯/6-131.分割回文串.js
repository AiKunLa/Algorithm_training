/**
 * 切割问题 切割后的子串都是回文

 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  if (s.length === 0) return [];
  const result = [];
  const path = [];
  const back = function (start) {
    if (start === s.length) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < s.length; i++) {
      // 判断 start ~ i 这段字符串是否是回文 是就入path 并back(i) 回溯
      let str = s.slice(start, i + 1);
      if (isPalindrome(str)) {
        path.push(str);
        back(i + 1);
        path.pop();
      }
    }
  };
  const isPalindrome = function (str) {
    let l = 0;
    let r = str.length - 1;
    while (l < r) {
      if (str[l] !== str[r]) return false;
      l++;
      r--;
    }
    return true;
  };
  back(0);
  return result;
};
console.log(partition("aab"));