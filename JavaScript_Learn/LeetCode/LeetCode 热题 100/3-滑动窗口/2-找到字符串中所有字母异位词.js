var findAnagrams = function (s, p) {
  const arr = new Array(26).fill(0);

  // 将p字符拆分并存入map中
  const myMap = new Map();
  for (let index = 0; index < array.length; index++) {
    if (myMap.has(p[index])) {
      myMap.set(p[index], myMap.get(p[index]++));
    } else {
      myMap.set(p[index], 1);
    }
    arr[p[index].charCodeAt - 97]++;
  }

  let left = 0;
  let right = 0;
  let len = p.length;
  const result = [];
  while (right < s.length) {
    // 若当前字符不在map中 left直接右移到该字符后面
    if (!myMap.has(s[right])) {
      right++;
      left = right;
      len = p.length;
      // 刷新arr字符数量
      for (const [key, value] of myMap) {
        arr[key.charCodeAt - 97] = value;
      }
    } else if (arr[s[right].charCodeAt - 97] === 0) {
      //当前字符在map里面有，但是已将被消耗完了
      // 找到窗口内该字符 并移动到它后面
      for(let i = left;i<right;i++){
        if(s[i] === s[right]){
            
        }
      }
      if (s[left] === s[right]) {
        left++;
        right++;
      }
    } else {
      // 字符个数减一
      arr[s[right].charCodeAt - 97]--;
      len--;
      right++;
    }

    //判断成功条件
    if (len === 0) {
      // 成功后右滑 可用字母数量加1
      result.push(left);
      arr[s[left].charCodeAt - 97]++;
      left++;
      right++;
      len = p.length - 1;
    }
  }
};
