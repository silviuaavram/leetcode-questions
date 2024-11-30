/**
 * https://leetcode.com/problems/moving-average-from-data-stream/description
 *
 * We keep the numbers in an array, and when we reach the max size, we remove the first one after we push.
 * We also pre-compute the sum so it's faster.
 */

class MovingAverage {
  private numbers: number[]
  private sum: number
  private size: number

  constructor(size: number) {
    this.size = size
    this.numbers = []
    this.sum = 0
  }

  next(val: number): number {
    this.numbers.push(val)
    this.sum += val

    if (this.numbers.length > this.size) {
      const removed = this.numbers.splice(0, 1)[0]
      this.sum -= removed
    }

    return Math.round((this.sum / this.numbers.length) * 100000) / 100000
  }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

export {MovingAverage}
