/**
 * https://leetcode.com/problems/single-number/number
 * 
 * We will use a set to check what numbers are already added.
 * We will create 2 sums, one that adds all the numbers in the array, and the other one that adds the distinct numbers.
 * We will multiply the distinct sum by 2, subtract the other sum, and the result is the number that's unique.
 */
function singleNumber(nums: number[]): number {
  let doubledSum = 0
  let sum = 0
  const numbersSet = new Set()

  for (let index = 0; index < nums.length; index++) {
    if (!numbersSet.has(nums[index])) {
      doubledSum += nums[index]
      numbersSet.add(nums[index])
    }

    sum += nums[index]
  }

  return doubledSum * 2 - sum
}

export {singleNumber}
