/**
 * https://leetcode.com/problems/random-pick-index/
 */

class Solution {
  private indeces = new Map<number, number[]>()

  constructor(nums: number[]) {
    for (let index = 0; index < nums.length; index++) {
      if (!this.indeces.has(nums[index])) {
        this.indeces.set(nums[index], [])
      }

      this.indeces.get(nums[index]).push(index)
    }
  }

  pick(target: number): number {
    const values = this.indeces.get(target)
    const size = values.length
    const randomNumber = Math.floor(Math.random() * size)

    return values[randomNumber]
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

export {Solution}
