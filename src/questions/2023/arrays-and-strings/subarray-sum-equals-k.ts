/**
 * https://leetcode.com/problems/subarray-sum-equals-k/
 */
function subarraySum(nums: number[], k: number): number {
  let result = 0
  const sums: number[] = []

  for (let index = 0; index < nums.length; index++) {
    sums[index] = (sums[index - 1] ?? 0) + nums[index]
  }

  for (let index1 = 0; index1 < nums.length; index1++) {
    if (sums[index1] === k) {
        result++
    }

    for (let index2 = 0; index2 < index1; index2++) {
        const sum = sums[index1] - sums[index2]

        if (sum === k) {
            result++
        }
    }
  }

  return result
}

export {subarraySum}
