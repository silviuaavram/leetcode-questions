/**
 * https://leetcode.com/problems/subarray-sum-equals-k/
 */
function subarraySum(nums: number[], k: number): number {
  let result = 0
  const sums: number[] = []

  // store the sums from 0 to index in a separate array.
  for (let index = 0; index < nums.length; index++) {
    sums[index] = (sums[index - 1] ?? 0) + nums[index]
  }

  // we check the sums
  for (let index1 = 0; index1 < nums.length; index1++) {
    // if the sum until index1 is k, increment result
    if (sums[index1] === k) {
        result++
    }

    // take all the sums until index1, subtract each from current sum and check if it's k
    // these subtractions are basically the subarray sums from 0->index1, 1->index2, 2->index2 ...
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
