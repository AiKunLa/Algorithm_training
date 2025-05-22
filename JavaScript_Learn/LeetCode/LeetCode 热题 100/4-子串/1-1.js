var subarraySum = function (nums, k) {
  let left = 0;
  let right = 0;
  let addResult = 0;
  let totalNum = 0;
  while (left < nums.length) {
    right = left;
    while (right < nums.length) {
      addResult += nums[right];
      if (addResult === k) {
        totalNum++;
      }
      right++;
    }
    addResult = 0;
    left++;
  }

  return totalNum;
};

console.log(subarraySum([1,-1,0], 0));


var subarraySum = function (nums, k) {
  // let count = 0
  // for (let start = 0; start < nums.length; start++) {
  //     let sum = 0
  //     for (let end = start; end >= 0; end--) {
  //         sum += nums[end]
  //         if (sum === k) count++
  //     }
  // }
  // return count
  const n = nums.length
  const arr = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
      arr[i + 1] = arr[i] + nums[i]
  }
  let result = 0
  const map = new Map()
  for (const item of arr) {
      result += map.get(item - k) ?? 0
      map.set(item, (map.get(item) ?? 0) + 1)
  }
  return result
};