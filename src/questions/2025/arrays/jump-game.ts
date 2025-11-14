/**
 * https://leetcode.com/problems/jump-game/description
 */
function canJump(nums: number[]): boolean {
  const jumped = new Array(nums.length).fill(false)
  const stack = [0]

  while (stack.length) {
    const current = stack.pop()

    if (current >= nums.length - 1) {
      return true
    }

    jumped[current] = true

    for (let index = 1; index <= nums[current]; index++) {
      if (!jumped[current + index]) {
        stack.push(current + index)
      }
    }
  }

  return false
}

export {canJump}
