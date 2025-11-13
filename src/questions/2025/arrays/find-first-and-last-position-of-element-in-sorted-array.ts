/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description
 */
function searchRange(nums: number[], target: number): number[] {
  let first: number
  let last: number

  function binarySearch(start: number, end: number) {
    if (start > end) {
      return
    }

    const mid = Math.floor((start + end) / 2)

    if (nums[mid] === target) {
      if (first === undefined || first > mid) {
        first = mid
      }
      if (last === undefined || last < mid) {
        last = mid
      }

      binarySearch(start, mid - 1)
      binarySearch(mid + 1, end)

      return
    }

    if (nums[mid] > target) {
      binarySearch(start, mid - 1)
    } else {
      binarySearch(mid + 1, end)
    }
  }

  binarySearch(0, nums.length - 1)

  if (first === undefined) {
    return [-1, -1]
  }

  return [first, last]
}

export {searchRange}
