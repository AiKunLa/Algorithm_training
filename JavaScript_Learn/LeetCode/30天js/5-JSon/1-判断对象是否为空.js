/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (obj === null || obj === undefined) {
    return true;
  } else if (Array.isArray(obj)) {
    return obj.length === 0;
  } else if (typeof obj === "object") {
    return Object.keys(obj).length === 0;
  } else {
    // 其他类型的对象
    return false;
  }
};

let isEmpty1 = function (obj) {
  return Array.isArray(obj) ? obj.length === 0 : Object.keys(obj).length == 0;
};
