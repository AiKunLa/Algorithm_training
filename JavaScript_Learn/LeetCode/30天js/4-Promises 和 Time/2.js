async function sleep(millis) {
  let saveTime = Date.now();
  setTimeout(() => {
    return Date.now() - saveTime;
  }, millis);
}

/**
 * 请你编写一个异步函数，它接收一个正整数参数 millis ，并休眠 millis 毫秒。要求此函数可以解析任何值。

请注意，实际睡眠持续时间与 millis 之间的微小偏差是可以接受的。
 */
