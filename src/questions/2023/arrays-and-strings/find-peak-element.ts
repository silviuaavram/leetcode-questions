/**
 * https://leetcode.com/problems/find-peak-element/
 */
function findPeakElement(nums: number[]): number {
  function getPeak(low: number, high: number): number {
    if (low === high) {
      return low
    }

    const middle = Math.floor((low + high) / 2)

    // if it's in a decreasing sequence, the peak must be to the left, including potentially this value.
    if (nums[middle] > nums[middle + 1]) {
      return getPeak(low, middle)
    }

    // if it's in an increasing sequence, the peak must be to the right, not including this value.
    return getPeak(middle + 1, high)
  }

  return getPeak(0, nums.length - 1)
}

export {findPeakElement}
