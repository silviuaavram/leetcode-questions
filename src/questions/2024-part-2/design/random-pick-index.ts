/**
 * https://leetcode.com/problems/random-pick-index/description
 *
 * We use a map to store all indeces for each number.
 * When we pick, we generate a random number, from 0 to indeces array length.
 * We use that number to return a random index.
 */

class Solution {
  private indeces: Map<number, number[]>

  constructor(nums: number[]) {
    this.indeces = new Map()

    for (let index = 0; index < nums.length; index++) {
      if (!this.indeces.has(nums[index])) {
        this.indeces.set(nums[index], [index])
      } else {
        this.indeces.get(nums[index]).push(index)
      }
    }
  }

  pick(target: number): number {
    const targetIndeces = this.indeces.get(target)
    const indecesSize = targetIndeces.length
    const random = Math.floor(Math.random() * indecesSize)

    return targetIndeces[random]
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

export {Solution}
