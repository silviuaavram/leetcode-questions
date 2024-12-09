/**
 * https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/description
 *
 * In one iteration, we check if the number is larger than the previous.
 * We increase the current subarray length as long as the sequence is increasing.
 * Once the increasing stops, we save the current increasing length in case we can merge (at least partially) with the next.
 * At every step, we update the result with the half of the current increasing length, and the (partial) merge between previous and current sequences.
 */
function maxIncreasingSubarrays(nums: number[]): number {
  let result = 1
  let currentK = 1
  let previousK = undefined

  for (let index = 1; index < nums.length; index++) {
    if (nums[index] > nums[index - 1]) {
      currentK++

      result = Math.max(
        result,
        Math.floor(currentK / 2),
        previousK !== undefined ? Math.min(currentK, previousK) : 0,
      )
    } else {
      previousK = currentK
      currentK = 1
    }
  }

  return result
}

export {maxIncreasingSubarrays}
