/**
 * https://leetcode.com/problems/random-pick-with-weight/description
 * 
 * We create a prefix sum array out of the weights.
 * When we pick index, we generate a random number between 0 and the total sum.
 * Them we search for the lowest value greater than the random value.
 */

class Solution {
  private sums: number[]
  constructor(w: number[]) {
    this.sums = w.reduce((acc, weight) => {
      if (acc.length) {
        acc.push(acc[acc.length - 1] + weight)
      } else {
        acc.push(weight)
      }

      return acc
    }, [])
  }

  pickIndex(): number {
    const random = Math.random() * this.sums[this.sums.length - 1]
    let start = 0
    let end = this.sums.length - 1

    while (start < end) {
      const middle = Math.floor((start + end) / 2)

      if (random > this.sums[middle]) {
        start = middle + 1
      } else {
        end = middle
      }
    }

    return start
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

export {Solution}
