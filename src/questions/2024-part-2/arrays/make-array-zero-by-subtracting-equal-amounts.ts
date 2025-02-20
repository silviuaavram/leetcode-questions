/**
 * https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description
 *
 * We just use a set to check how many different numbers we have, excluding 0.
 * The result is the number of different numbers.
 */
function minimumOperations(nums: number[]): number {
  return new Set(nums.filter(num => num !== 0)).size
}

export {minimumOperations}
