var intersection = function (nums1, nums2) {
  const myMap = new Map();
  const result = [];
  //  遍历第一个数组并将元素放入Map中 key为元素 vale 为0
  for (let i = 0; i < nums1.length; i++) myMap.set(nums1[i], 0);
  for (let i = 0; i < nums2.length; i++) {
    // 元素在map中有 且valu 不为1
    if (myMap.has(nums2[i]) && myMap.get(nums2[i]) !== 1) {
      result.push(nums2[i]);
      myMap.set(nums2[i], 1);
    }
  }
  return result;
};
