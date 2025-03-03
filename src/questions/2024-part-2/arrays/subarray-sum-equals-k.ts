/**
 * https://leetcode.com/problems/subarray-sum-equals-k/description
 * 
 * The idea is to calculate the cumulative sums for each index.
 * The cumulative sum is the sum up to that index.
 * If for the cumulative sum between 2 indeces, i and j, sum[i] - sum[j] = k, then the sum between i and j is k.
 * We store these cumulative sums in sumsMap, and add as value how many results we have for that cumulative sum.
 * And we also check if we have a result for sum - k in the map, and we add it to the main results.
 * This step means that there is result cumulative sums for that difference, so there are subarrays with the sum k.
 */
function subarraySum(nums: number[], k: number): number {
  const sumsMap = new Map<number, number>([[0, 1]])
  let sum = 0
  let result = 0

  for (let index = 0; index < nums.length; index++) {
    sum += nums[index]

    if (sumsMap.has(sum - k)) {
        result += sumsMap.get(sum - k)
    }

    sumsMap.set(sum, (sumsMap.get(sum) ?? 0) + 1)
  }

  return result
}

export {subarraySum}
