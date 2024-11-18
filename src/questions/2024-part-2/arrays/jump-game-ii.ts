/**
 * https://leetcode.com/problems/jump-game-ii/description
 */

function jump(nums: number[]): number {
	if (nums.length === 1) {
		return 0
	}

  const jumps = nums.reduce((acc, num, index) => {
    if (index === 0) {
      acc[index] = num
      return acc
    }

    acc[index] = Math.max(num, acc[index - 1] - 1)

    return acc
  }, new Array(nums.length))

  const jumpsBackwards = []

  for (let index = nums.length - 2; index >= 0; index--) {
    if (index + jumps[index] >= nums.length - 1) {
      jumpsBackwards[index] = 1
    } else {
      jumpsBackwards[index] = jumpsBackwards[index + jumps[index]] + 1
    }
  }

  return jumpsBackwards[0]
}

export {jump}
