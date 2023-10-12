/**
 * https://leetcode.com/problems/move-zeroes/
 * Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let zeroesCount = 0

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 0) {
      nums.splice(index, 1)

      zeroesCount++
      index--
    }
  }

  for (let index = 0; index < zeroesCount; index++) {
    nums.push(0)
  }
}

export {moveZeroes}
