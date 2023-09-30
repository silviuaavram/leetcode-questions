// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

function maxProfit(prices: number[]): number {
  let minPrice = prices[0]
  let profit = 0

  for (const price of prices) {
    if (minPrice > price) {
      minPrice = price
    }

    const newProfit = price - minPrice

    if (newProfit > profit) {
      profit = newProfit
    }
  }

  return profit
}

export {maxProfit}
