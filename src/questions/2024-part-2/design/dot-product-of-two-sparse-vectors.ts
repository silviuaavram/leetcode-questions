/**
 * https://leetcode.com/problems/dot-product-of-two-sparse-vectors/description
 *
 * Store the sparse vector using a map.
 * Then go through one of the vector's map, and check if the second map has a value for that key.
 * If so, add the product to the result.
 */

class SparseVector {
  private vectorMap: Map<number, number>

  constructor(nums: number[]) {
    this.vectorMap = new Map()

    for (let index = 0; index < nums.length; index++) {
      if (nums[index] !== 0) {
        this.vectorMap.set(index, nums[index])
      }
    }
  }

  // Return the dotProduct of two sparse vectors
  dotProduct(vec: SparseVector): number {
    return Array.from(vec.vectorMap.entries()).reduce((acc, entry) => {
      if (this.vectorMap.has(entry[0])) {
        return acc + this.vectorMap.get(entry[0]) * entry[1]
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
