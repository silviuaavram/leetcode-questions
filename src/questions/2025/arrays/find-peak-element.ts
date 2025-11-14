/**
 * https://leetcode.com/problems/find-peak-element
 */
function findPeakElement(nums: number[]): number {
  let start = 0
  let end = nums.length - 1

  function checkPeak(position: number) {
    return (
      (position === 0 || nums[position] > nums[position - 1]) &&
      (position === nums.length - 1 || nums[position] > nums[position + 1])
    )
  }

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)

    if (checkPeak(mid)) {
      return mid
    }

    if (nums[mid] > nums[mid + 1]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
}

export {findPeakElement}
