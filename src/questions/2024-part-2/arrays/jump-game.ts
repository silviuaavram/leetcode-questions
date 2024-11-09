/**
 * https://leetcode.com/problems/jump-game/description
 *
 * We use dynamic programming.
 * For each index starting with 1, the max jump is the max between current value and previous - 1.
 * Then we check if we have a 0 in the array and if so it means we cannot jump on top of it.
 */
function canJump(nums: number[]): boolean {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i - 1] - 1)
  }

  for (let index = 0; index < nums.length - 1; index++) {
    if (nums[index] === 0) {
      return false
    }
  }

  return true
}

export {canJump}
