/**
 * https://leetcode.com/problems/house-robber-ii/description
 * 
 * It's the basic house robber problem, but we need to apply it to subarrays.
 * Since the first house is next to the last, we need to apply the house robber problem on:
 * 1. the array without the last house.
 * 2. the array without the first house.
 * The house robber check is dynamic programming where at every step we either rob the house or not.
 * If we rob it, the loot is this house loot + all the loot until house index - 2.
 * If we don't, the loot is still the loot until house index - 1.
 * We return the max between both arrays.
 */
function rob(nums: number[]): number {
  if (nums.length < 4) {
    return Math.max(...nums)
  }

  const lootWithFirstHouse = new Array(nums.length - 1)
  const lootWithoutFirstHouse = new Array(nums.length - 1)

  for (let index = 0; index < nums.length - 1; index++) {
    lootWithFirstHouse[index] = Math.max(
      nums[index] + (lootWithFirstHouse[index - 2] ?? 0),
      lootWithFirstHouse[index - 1] ?? 0,
    )
  }

  for (let index = 0; index < nums.length - 1; index++) {
    lootWithoutFirstHouse[index] = Math.max(
      nums[index + 1] + (lootWithoutFirstHouse[index - 2] ?? 0),
      lootWithoutFirstHouse[index - 1] ?? 0,
    )
  }

  return Math.max(...lootWithFirstHouse, ...lootWithoutFirstHouse)
}

export {rob}
