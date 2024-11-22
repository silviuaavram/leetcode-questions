/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description
 *
 * We do a binary search for the indeces.
 * If we find an index, we continue to search.
 */

function searchRange(nums: number[], target: number): number[] {
  let min = Infinity
  let max = -Infinity

  function search(start: number, end: number): void {
    if (start > end) {
      return
    }

    const middle = Math.floor((start + end) / 2)

    if (nums[middle] === target) {
      min = Math.min(middle, min)
      max = Math.max(middle, max)

      search(start, middle - 1)
      search(middle + 1, end)

      return
    }

    if (nums[middle] < target) {
      search(middle + 1, end)
    } else {
      search(start, middle - 1)
    }
  }

  search(0, nums.length - 1)

  if (min === Infinity || max === -Infinity) {
    return [-1, -1]
  }

  return [min, max]
}

export {searchRange}
