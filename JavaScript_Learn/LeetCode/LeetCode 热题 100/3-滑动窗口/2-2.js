var findAnagrams = function (s, p) {
  const arr = new Array(26).fill(0);

  // 将p字符拆分并存入map中
  const myMap = new Map();
  for (let index = 0; index < p.length; index++) {
    let char = p[index].charCodeAt(0) - 97;
    arr[char]++;
    myMap.set(p[index], arr[char]);
  }
  let left = 0;
  let right = p.length - 1;
  let index = left;
  const result = [];
  while (right < s.length) {
    // 若当前字符不在map中 left直接右移到该字符后面
    if (!myMap.has(s[index])) {
      index++;
      left = index;
      right = index + p.length - 1;
      // 刷新arr字符数量
      for (const [key, value] of myMap) {
        arr[key.charCodeAt(0) - 97] = myMap.get(key);
      }
    } else if (arr[s[index].charCodeAt(0) - 97] === 0) {
      //当前字符在map里面有，但是已将被消耗完了
      // 找到窗口内该字符 并移动到它后面
      for (let i = left; i < right; i++) {
        if (s[i] === s[index]) {
          index = i;
          break;
        }
      }
      left = index + 1;
      right = index + p.length;
      index = left;
      for (const [key, value] of myMap) {
        arr[key.charCodeAt(0) - 97] = myMap.get(key);
      }
    } else {
      arr[s[index].charCodeAt(0) - 97]--;
      index++;
    }

    if (index === right + 1) {
      // 成功后右滑 可用字母数量加1
      result.push(left);
      arr[s[left].charCodeAt(0) - 97]++;
      left++;
      right++;
    }
  }
  return result;
};

console.log(findAnagrams("abcabccbbaa", "aabbcc"));
