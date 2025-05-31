var maxSlidingWindow = function (nums, k) {
  const n = nums.length;
  const q = [];
  // 将前k个元素下标放入队列中
  for (let i = 0; i < k; i++) {
    // 若当前元素比队头下标对应的元素大 对头出队列
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i);
  }
  // 结果集
  const ans = [nums[q[0]]];
  for (let i = k; i < n; i++) {
    // 若当前元素比队头下标对应的元素大 对头出队列
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i);
    // 队尾下标不在滑动窗口内部 则出队列
    while (q[0] <= i - k) {
      q.shift();
    }
    ans.push(nums[q[0]]);
  }
  return ans;
};

var maxSlidingWindow = function (nums, k) {
  let n = nums.length;
  const queue = [];
  for (let i = 0; i < k; i++) {
    while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push();
  }
  const result = [];
  result.push(nums[queue[0]]);
  for (let i = k; i < n; i++) {
    while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push();
    while (queue[0] <= i - k) {
      queue.shift(); //队头出队列
    }
    result.push(nums[queue[0]]);
  }
  return result;
};
