/**
 * https://leetcode.com/problems/move-zeroes/description
 *
 * We iterate through the whole array with one index.
 * We use another index to iterate for non zero numbers.
 * When we find a 0 with index, we start a search for a non zero with the other index, then we switch.
 */
function moveZeroes(nums: number[]): void {
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 0) {
      for (let indexNonZero = index + 1; indexNonZero < nums.length; indexNonZero++) {
        if (nums[indexNonZero] !== 0) {
          nums[index] = nums[indexNonZero]
          nums[indexNonZero] = 0

          break
        }
      }
    }
  }
}

export {moveZeroes}
