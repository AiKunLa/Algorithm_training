//Promise 是用于处理异步操作的对象，能有效解决回调地狱问题
// 创建一个Promise对象
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("成功");
    } else {
      reject("失败");
    }
  }, 3000);
});

// 使用Promise对象
myPromise.then((result)=>{
  console.log(result)
}).catch((error)=>{
  console.log(error)
})


