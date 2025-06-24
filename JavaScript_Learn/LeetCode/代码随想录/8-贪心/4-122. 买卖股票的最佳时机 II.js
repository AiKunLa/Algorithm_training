/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 上涨就卖 下降不买
  let result = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) result += prices[i] - prices[i - 1];
  }
  return result
};

console.log(maxProfit([1,1,0]));
