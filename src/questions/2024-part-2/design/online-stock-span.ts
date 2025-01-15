/**
 * https://leetcode.com/problems/online-stock-span/description
 *
 * We use a stack to keep the previous prices.
 * Before we push the next price, we check how many prices we can pop that are less or equal than current price.
 */
class StockSpanner {
  prices: number[]
  constructor() {
    this.prices = []
  }

  next(price: number): number {
    let index

    for (index = 0; index < this.prices.length; index++) {
      if (this.prices[this.prices.length - 1 - index] > price) {
        break
      }
    }

    this.prices.push(price)

    return index + 1
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

export {StockSpanner}
