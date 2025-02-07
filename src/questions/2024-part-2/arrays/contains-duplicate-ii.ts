/**
 * https://leetcode.com/problems/contains-duplicate-ii/description
 *
 * We use a map to save indeces for each number.
 * Then if a number has multiple indeces, we check them 2 by 2 and return true if any is at most k difference.
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const indeces = new Map<number, number[]>()

  for (let index = 0; index < nums.length; index++) {
    if (!indeces.has(nums[index])) {
      indeces.set(nums[index], [])
    }

    indeces.get(nums[index]).push(index)
  }

  const entries = Array.from(indeces.entries())

  for (const [_value, indeces] of entries) {
    if (indeces.length === 1) {
      continue
    }

    for (let index = 0; index < indeces.length - 1; index++) {
      if (Math.abs(indeces[index] - indeces[index + 1]) <= k) {
        return true
      }
    }
  }

  return false
}

export {containsNearbyDuplicate}
