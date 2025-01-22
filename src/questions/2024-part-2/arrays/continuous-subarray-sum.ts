/**
 * https://leetcode.com/problems/continuous-subarray-sum/description
 *
 * We use a map to hold the prefix sum and its index.
 * We can always divide the accumulated sum by k and get the rest for simplicity.
 * While we iterate and add sums to the accumulator, we also do some checks:
 * 1. if the accumulator is 0, it means we have a multiplier of k, we return true.
 * 2. if the accumulator is already in the map, we check its index, and return true if it's spaced enough apart.
 */
function checkSubarraySum(nums: number[], k: number): boolean {
  if (nums.length < 2) {
    return false
  }

  const sums = new Map([[nums[0] % k, 0]])
  let acc = nums[0]

  for (let index = 1; index < nums.length; index++) {
    acc = (acc + nums[index]) % k

    if (acc === 0) {
      return true
    }

    if (sums.has(acc)) {
      if (index - sums.get(acc) > 1) {
        return true
      }
    } else {
      sums.set(acc, index)
    }
  }

  return false
}

export {checkSubarraySum}
