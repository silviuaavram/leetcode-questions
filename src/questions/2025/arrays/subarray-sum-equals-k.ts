/**
 * https://leetcode.com/problems/subarray-sum-equals-k/description
 */
function subarraySum(nums: number[], k: number): number {
    const sums = new Map([[0, 1]])
    let result = 0
    let sum = 0

    for (const num of nums) {
      sum += num

      if (sums.has(sum - k)) {
        result += sums.get(sum - k)
      }

      sums.set(sum, (sums.get(sum) ?? 0) + 1)
    }


    return result
};

export {subarraySum}