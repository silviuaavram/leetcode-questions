/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description
 * 
 * We apply binary search directly.
 * We check the middle element.
 * If element is larger than target, we search to the left.
 * If the left search has no result, it might mean that the pivot is to the right, so we binary search there as well.
 * We do the same thing when element is smaller than target and we search to the right.
 * We perform this check at every binary search step.
 */

function search(nums: number[], target: number): number {
  function binarySearch(start: number, end: number): number {
    if (start > end) {
      return -1
    }

    const mid = Math.floor((start + end) / 2)

    if (nums[mid] === target) {
      return mid
    }

    if (nums[mid] > target) {
      const resultToTheLeft = binarySearch(start, mid - 1)

      if (resultToTheLeft === -1) {
        return binarySearch(mid + 1, end)
      }

      return resultToTheLeft
    }

    if (nums[mid] < target) {
      const resultToTheRight = binarySearch(mid + 1, end)

      if (resultToTheRight === -1) {
        return binarySearch(start, mid - 1)
      }

      return resultToTheRight
    }
  }

  return binarySearch(0, nums.length - 1)
}

export {search}
