/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description
 */
function maxProfit(prices: number[]): number {
  let profit = 0
  let minPrice = prices[0]

  for (let index = 1; index < prices.length; index++) {
    if (prices[index] - minPrice > profit) {
      profit = prices[index] - minPrice
    }

    if (minPrice > prices[index]) {
      minPrice = prices[index]
    }
  }

  return profit
}

export {maxProfit}
