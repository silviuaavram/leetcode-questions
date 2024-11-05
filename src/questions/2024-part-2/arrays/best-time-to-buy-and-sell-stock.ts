/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description
 * 
 * We generate an array of the minimum price up to that index.
 * We go through the prices again and generate a profit for every index, which is price - minimum up until that point.
 * We refresh the profit.
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
