/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) return false; // 奇数个直接返回false
  // 左压右出
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      let c = stack.pop();
      if (
        (s[i] === ")" && c !== "(") ||
        (s[i] === "}" && c !== "{") ||
        (s[i] === "]" && c !== "[")
      )
        return false;
    }
  }
  if (stack.length !== 0) return false;
  return true;
};

console.log(isValid("()[]{}"));
