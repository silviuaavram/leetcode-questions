/**
 * https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/description
 *
 * We will try to split the balls with a bag total as minimum as possible.
 * We will use binary search.
 * We will set a limit using binary search, between 1 and max balls in the bags.
 * If we can split the balls to that limit, we increase the limit, try again.
 * Otherwise, decrease the limit.
 */
function minimumSize(nums: number[], maxOperations: number): number {
  let min = 1
  let max = Math.max(...nums)

  function checkSplit(size: number): boolean {
    let totalOperations = 0
    for (let index = 0; index < nums.length; index++) {
      // how many operations we need to split the balls in the bag into new bags with the size max.
      totalOperations += Math.ceil(nums[index] / size) - 1

      if (totalOperations > maxOperations) {
        return false
      }
    }

    return true
  }

  while (min < max) {
    const mid = Math.floor((min + max) / 2)

    if (checkSplit(mid)) {
      max = mid
    } else {
      min = mid + 1
    }
  }

  return max
}

export {minimumSize}
