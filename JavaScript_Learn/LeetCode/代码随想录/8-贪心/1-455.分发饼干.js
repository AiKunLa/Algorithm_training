/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 目标是满足更多的孩子 先从g值最小的开始满足 每个孩子只能分得一个饼干 从s中找到大于等于g的最小值
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let num = 0;
  let sIndex = 0;
  for (let i = 0; i < g.length; i++) {
    // 截断
    if (g[i] > s[s.length - 1]) break;
    // 找
    while (sIndex < s.length) {
      if (s[sIndex] >= g[i]) {
        num++;
        sIndex++;
        break;
      }
      sIndex++;
    }
  }
  return num;
};
console.log(findContentChildren([1,2],[1,2,3]))