var fourSumCount = function (nums1, nums2, nums3, nums4) {
  // 两两一组 统计nums1和nums2之和，将和作为key 将 次数作为value
  const myMap = new Map();
  let result = 0;
  let n = nums1.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let add = nums1[i] + nums2[j];
      if (myMap.has(add)) {
        myMap.set(add, myMap.get(add) + 1);
      } else {
        myMap.set(add, 1);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let add = 0 - (nums3[i] + nums4[j]);
      if (myMap.has(add)) {
        result += myMap.get(add);
      }
    }
  }
  return result;
};
