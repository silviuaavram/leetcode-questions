/**
 * https://leetcode.com/problems/maximum-average-subarray-i/description
 * 
 * We compute the prefix sum array.
 * We choose the largest average by iterating through the sums.
 */
function findMaxAverage(nums: number[], k: number): number {
  const sums = nums.reduce((acc, num, index) => {
    if (!index) {
      acc.push(num)
    } else {
      acc.push(acc[index - 1] + num)
    }

    return acc
  }, [])

  let result = -Infinity

  for (let index = 0; index <= nums.length - k; index++) {
    const average = sums[index + k - 1] - (sums[index - 1] ?? 0)

    result = Math.max(result, average / k)
  }

  return result
}

export {findMaxAverage}
