/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 低买高卖 上升到波峰时候卖 在波谷时候买
  if (prices.length < 2) return 0;
  let result = 0; // 记录结果
  if (prices[1] > prices[0]) result -= prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (i === prices.length - 1 && prices[i] > prices[i - 1])
      result += prices[i];
    // 由涨转跌 买
    if (i >= 2 && prices[i] < prices[i - 1] && prices[i - 1] > prices[i - 2]) {
      result += prices[i - 1];
    }

    // 由跌转涨
    if (i >= 2 && prices[i] > prices[i - 1] && prices[i - 1] < prices[i - 2]) {
      result -= prices[i - 1];
    }
  }
  return result;
};

var maxProfit = function (prices) {
  // 低买高卖：在波谷买入，波峰卖出
  if (prices.length < 2) return 0;
  let profit = 0;
  let hasStock = false; // 跟踪是否持有股票
  let buyPrice = 0;

  for (let i = 0; i < prices.length; i++) {
    // 最后一天如果持有股票则卖出
    if (i === prices.length - 1) {
      if (hasStock) {
        profit += prices[i] - buyPrice;
        hasStock = false;
      }
      break;
    }

    // 波谷：当前价格低于后一天，且未持有股票时买入
    if (!hasStock && prices[i] < prices[i + 1]) {
      buyPrice = prices[i];
      hasStock = true;
    }
    // 波峰：当前价格高于后一天，且持有股票时卖出
    else if (hasStock && prices[i] > prices[i + 1]) {
      profit += prices[i] - buyPrice;
      hasStock = false;
    }
  }
  return profit;
};

var maxProfit = function (prices) {
  // 上涨就卖 下降不买
  let result = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) result += prices[i] - prices[i - 1];
  }
  return result;
};
