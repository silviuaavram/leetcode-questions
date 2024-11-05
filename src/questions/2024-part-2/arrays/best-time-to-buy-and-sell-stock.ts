/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description
 */
function maxProfit(prices: number[]): number {
  const minimums = prices.reduce((acc, price, index) => {
    acc.push(Math.min(price, acc[index - 1] ?? Infinity))

    return acc
  }, [])

  return prices.reduce(
    (maximum, price, index) => Math.max(maximum, price - minimums[index]),
    0,
  )
}

export {maxProfit}
