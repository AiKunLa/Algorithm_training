/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  // 栈 若当前元素与栈顶元素相同则删除两者
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length !== 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
};
console.log(removeDuplicates("abbaca"));

