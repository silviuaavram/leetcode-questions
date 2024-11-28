/**
 * https://leetcode.com/problems/find-peak-element/description
 *
 * We do a binary search to find the element.
 * If we don't find the element, we go towards to upwards slope, since it must be a peak in that direction.
 */
function findPeakElement(nums: number[]): number {
  function findPeak(start: number, end: number) {
    if (start < 0 || end < 0) {
      throw new Error('should not end here')
    }

    const middle = Math.floor((start + end) / 2)
    const currentNum = nums[middle]
    const nextNum = nums[middle + 1] ?? -Infinity
    const previousNum = nums[middle - 1] ?? -Infinity

    if (currentNum > previousNum && currentNum > nextNum) {
      return middle
    }

    if (currentNum < nextNum) {
      return findPeak(middle + 1, end)
    } else {
      return findPeak(start, middle - 1)
    }
  }

  return findPeak(0, nums.length - 1)
}

export {findPeakElement}
