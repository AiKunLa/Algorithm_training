/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const len = s.length;
  const result = [];
  const path = [];
  const back = function (start) {
    if (start === n) {
      if (path.length === 4) {
        result.push(path.join("."));
      }
      return;
    }
    for (let i = start; i < n; i++) {
      // 长度限制 大小限制
      let str = s.substring(start, i + 1);
      if (Number(str) > 255) break;
      if (str.length > 3) break;
      if (str.length > 1 && str[0] === "0") break;
      path.push(str);
      back(i + 1);
      path.pop();
    }
  };
  back(0);
  return result;
};
