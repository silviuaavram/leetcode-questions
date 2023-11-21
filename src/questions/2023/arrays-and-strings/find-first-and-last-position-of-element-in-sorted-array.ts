/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */
function searchRange(nums: number[], target: number): number[] {
  const result = [-1, -1]

  function binarySearch(start: number, end: number): void {
    if (start > end) {
      return
    }

    const mid = Math.floor((start + end) / 2)

    if (nums[mid] === target) {
      if (result[0] === -1) {
        result[0] = mid
        result[1] = mid
      } else {
        result[0] = Math.min(result[0], mid)
        result[1] = Math.max(result[1], mid)
      }

      binarySearch(start, mid - 1)
      binarySearch(mid + 1, end)
    } else if (nums[mid] > target) {
      binarySearch(start, mid - 1)
    } else {
      binarySearch(mid + 1, end)
    }
  }

  binarySearch(0, nums.length - 1)

  return result
}

export {searchRange}
