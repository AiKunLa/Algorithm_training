/**
 * 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  // 探测 子串从1~n
  let len = Math.floor(s.length / 2);
  for (let i = 0; i < len; i++) {
    let c = i - 0 + 1;
    let nextSta = i + 1;
    let nextEd = nextSta + c;
    while (nextSta < s.length && nextEd <= s.length) {
      if (s.slice(0, i+1) === s.slice(nextSta, nextEd)) {
        if (nextEd === s.length) return true;
        nextSta = nextEd;
        nextEd += c;
      } else break;
    }
  }
  return false;
};
// over
function repeatedSubstringPattern(s) {
    return (s + s).slice(1, -1).includes(s);
}

console.log(repeatedSubstringPattern("abababab"));
