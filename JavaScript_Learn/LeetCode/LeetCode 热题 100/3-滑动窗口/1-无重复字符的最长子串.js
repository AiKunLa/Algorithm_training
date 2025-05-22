var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;
  // 创建map用来存储滑动窗口内的字符种类以及字符所在位置，字符：索引
  const myMap = new Map();
  // 滑动窗口左右边界
  let left = 0;
  let right = 0;
  let maxLenght = 0;
  const arr = s.split("");
  while (right < s.length) {
    // 右边界到顶时退出
    // 右边界移动  map中没有 或者 map中有但是不在窗口内部
    if (!myMap.has(arr[right]) || myMap.get(arr[right]) < left) {
      myMap.set(arr[right], right);
      right++;
      // 更新最长
      if (right - left > maxLenght) maxLenght = right - left;
    } else {
      //左边界移动 到相同字符的后一位
      left = myMap.get(arr[right]) + 1;
      // 更新
      myMap.set(arr[right], right);
      right++;
    }
  }
  return maxLenght;
};

console.log(lengthOfLongestSubstring("aab"));
