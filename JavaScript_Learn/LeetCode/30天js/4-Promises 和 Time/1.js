/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
// 第一种方法
var addTwoPromises = async function (promise1, promise2) {
  return promise1.then((resolve) => {
    return promise2.then((resolve2) => {
      return resolve + resolve2;
    });
  });
};

// 第二种方法
var addTwoPromises = async function (promise1, promise2) {
  return await Promise.all([promise1, promise2]).then(
    ([rs1, rs2]) => rs1 + rs2
  );
};
