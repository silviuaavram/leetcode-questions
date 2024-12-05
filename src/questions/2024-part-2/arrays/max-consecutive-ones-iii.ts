/**
 * https://leetcode.com/problems/max-consecutive-ones-iii/description
 * 
 * We use a sliding window approach, which we increase if we did not reach k flipped 0s yet.
 * If we reached the limit, we decrease the window.
 * We update the result on every step. We do this until we reach the end of the array.
 */
function longestOnes(nums: number[], k: number): number {
  let result = 0

  function checkSubarray(start: number, end: number, flipped: number) {
    if (end === nums.length) {
      return
    }

    if (flipped > k) {
        return checkSubarray(
          start + 1,
          end,
          nums[start] === 0 ? flipped - 1 : flipped,
        )
      }

    const size = end - start + 1

    result = Math.max(result, size)

    return checkSubarray(
      start,
      end + 1,
      nums[end + 1] === 0 ? flipped + 1 : flipped,
    )
  }

  checkSubarray(0, 0, nums[0] === 0 ? 1 : 0)

  return result
}

export {longestOnes}
