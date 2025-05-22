Array.prototype.groupBy = function (fn) {
  const result = {};
  for (const item of this) {
    const key = fn(item);
    if (key in result) {
      result[key].push(item);
    } else {
      result[key] = [item]; // 初始化数组
    }
  }
  return result;
};
