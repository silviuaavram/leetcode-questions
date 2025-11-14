/**
 * https://leetcode.com/problems/maximum-subarray
 */
function maxSubArray(nums: number[]): number {
  let maxSum = nums[0]
  const sums = [nums[0]]

  for (let index = 1; index < nums.length; index++) {
    sums[index] = Math.max(sums[index - 1] + nums[index], nums[index])
    maxSum = Math.max(maxSum, sums[index])
  }

  return maxSum
}

export {maxSubArray}
