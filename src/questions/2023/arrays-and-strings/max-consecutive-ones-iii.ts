/**
 * https://leetcode.com/problems/max-consecutive-ones-iii/
 */
function longestOnes(nums: number[], k: number): number {
  let indexLeft = 0
  let indexRight = 0
  let currentFlips = 0
  let result = 0

  while (indexRight < nums.length) {
    // if we find a 0
    if (nums[indexRight] === 0) {
      // we first shrink from the left if we exceeded k
      while (currentFlips === k) {
        // shrink until we find a 0
        if (nums[indexLeft++] === 0) {
          currentFlips--
        }
      }

      // even if we shrinked or not, we have a 0, so we increment the allowed flips.
      currentFlips++
    }
    // we refresh the result
    result = Math.max(result, indexRight - indexLeft + 1)

    // and move right
    indexRight++
  }

  return result
}

export {longestOnes}
