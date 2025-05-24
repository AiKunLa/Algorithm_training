var isAnagram = function (s, t) {
  // 判断长度是否相等
  if (s.length !== t.length) return false;
  if (s === t) return true;
  // 遍历两个字符串 分别统计每个字母个数用 使用数组或者Map
  const arr1 = Array.from({ length: 26 }, () => 0);
  const arr2 = Array.from({ length: 26 }, () => 0);
  for (let i = 0; i < s.length; i++) {
    let sr1 = s[i];
    let sr2 = t[i];
    arr1[sr1.charCodeAt(0) - 97]++;
    arr2[sr2.charCodeAt(0) - 97]++;
  }
  // 遍历数组或者Map 若相同key对应的valu不同则false
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

console.log(isAnagram("rat", "car"));
