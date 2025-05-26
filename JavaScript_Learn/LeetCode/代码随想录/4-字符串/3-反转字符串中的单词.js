/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  if (!s) return "";
  // 字符串截取
  let n = s.length;
  let restultStr = "";
  for (let i = 0; i < n; i++) {
    if (s[i] === " ") continue;
    let j = i;
    while (j < n && s[j] !== " ") j++;
    if (restultStr !== "") restultStr = s.slice(i, j) + " " + restultStr;
    else restultStr = s.slice(i, j);
    i = j;
  }
  return restultStr;
};

console.log(reverseWords("  hello world  "));
