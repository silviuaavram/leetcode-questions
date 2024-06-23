/**
 * https://leetcode.com/problems/two-sum/description
 */

export function twoSum(nums: number[], target: number): number[] {
  const indeces = new Map<number, number[]>()

  for (let index = 0; index < nums.length; index++) {
    if (!indeces.has(nums[index])) {
      indeces.set(nums[index], [])
    }
    indeces.get(nums[index]).push(index)
  }

  for (let index = 0; index < nums.length; index++) {
    const difference = target - nums[index]

    if (indeces.has(difference)) {
      if (difference === nums[index]) {
        if (indeces.get(nums[index]).length === 2) {
          return indeces.get(nums[index])
        }
      } else {
        return [index, indeces.get(difference)[0]]
      }
    }
  }
}
