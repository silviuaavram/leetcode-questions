/**
 * https://leetcode.com/problems/jump-game-ii/description
 *
 * We create the array of the maximum jump that can be taken until that position.
 * For instance [5, 1, 1, ...] for index 2 it's going to be 3, because we have a big jump 5 2 indeces before.
 * Using this array, we start backwards, and check from what position we can reach the end.
 * If from a position we can't reach the end, it means we add a jump to the position we can reach jumping from that position.
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
