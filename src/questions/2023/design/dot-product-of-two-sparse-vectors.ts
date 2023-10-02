/**
 * https://leetcode.com/problems/dot-product-of-two-sparse-vectors/
 */
class SparseVector {
  private _values: Map<number, number>

  constructor(nums: number[]) {
    this._values = new Map()

    for (let index = 0; index < nums.length; index++) {
      const num = nums[index]

      if (num !== 0) {
        this._values.set(index, num)
      }
    }
  }

  public get values() {
    return this._values
  }

  // Return the dotProduct of two sparse vectors
  dotProduct(vec: SparseVector): number {
    return Array.from(this._values.entries()).reduce((acc, [index, value]) => {
      if (vec.values.has(index)) {
        return acc + vec.values.get(index) * value
      }

      return acc
    }, 0)
  }
}

/**
 * Your SparseVector object will be instantiated and called as such:
 * var v1 = new SparseVector(nums1)
 * var v2 = new SparseVector(nums1)
 * var ans = v1.dotProduct(v2)
 */

export {SparseVector}
