/**
 * https://leetcode.com/problems/zero-array-transformation-i/description
 *
 * We use a difference sum array to solve this one efficiently.
 * To compute the queries in O(1) each we create a difference array and then form a prefix sum array from it.
 * Initialise an array of length + 1 with 0.
 * For each [l,r] of query, increment the difference array at l and decrement at r + 1.
 * Create cumulative sum from this array.
 * Then compare each element with corresponding nums element and if it's less, then it means it cannot be 0 at the end.
 */
function isZeroArray(nums: number[], queries: number[][]): boolean {
  const diffArray = new Array(nums.length + 1).fill(0)

  for (const [l, r] of queries) {
    diffArray[l]++
    diffArray[r + 1]--
  }

  for (let index = 1; index < diffArray.length; index++) {
    diffArray[index] = diffArray[index] + diffArray[index - 1]
  }

  for (let index = 0; index < nums.length; index++) {
    if (diffArray[index] < nums[index]) {
      return false
    }
  }

  return true
}

export {isZeroArray}
