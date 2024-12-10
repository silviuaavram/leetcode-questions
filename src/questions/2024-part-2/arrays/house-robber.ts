/**
 * https://leetcode.com/problems/house-robber/description
 *
 * At each house, we can choose to:
 * 1. not to rob it, and instead rob previous house.
 * 2. rob it, not rob the previous, rob the previous - 1.
 * 3. rob it, not rob the previous, not rob the previous - 1, rob the previous - 2.
 * We save the maximum value between these decisions, for future decisions => dynamic programming.
 */
function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0]
  }

  const robberies = [nums[0], nums[1]]

  for (let index = 2; index < nums.length; index++) {
    robberies[index] = Math.max(
      robberies[index - 1],
      nums[index] + robberies[index - 2],
      index > 2 ? nums[index] + robberies[index - 3] : 0,
    )
  }

  return Math.max(
    robberies[robberies.length - 1],
    robberies[robberies.length - 2],
  )
}

export {rob}
