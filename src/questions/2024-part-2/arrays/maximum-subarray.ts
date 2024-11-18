/**
 * https://leetcode.com/problems/maximum-subarray/description
 * 
 * We create an array of sums, where for each position we consider:
 * 1. adding the number to the sum before (continuing the subarray)
 * 2. keeping this number (starting a new subarray)
 * We make this decision by comparing the values between these approaches.
 */

function maxSubArray(nums: number[]): number {
  const maxSum = nums.reduce((acc, num, index) => {
    if (index === 0) {
      acc.push(num)
    } else {
      acc.push(Math.max(acc[index - 1] + num, num))
    }
    return acc
  }, [])

  return Math.max(...maxSum)
}

export {maxSubArray}
