/**
 * https://leetcode.com/problems/missing-element-in-sorted-array/
 */
function missingElement(nums: number[], k: number): number {
  // the number of missing elements until an index is: total elements - how many elements we actually have until index.
  function countMissing(index: number) {
    const totalElements = nums[index] - nums[0] + 1

    return totalElements - (index + 1)
  }

  const missingFromLastElement = countMissing(nums.length - 1)

  // if we want more missing elements than the ones actually missing from the array, we go further than last element.
  if (missingFromLastElement < k) {
    return nums[nums.length - 1] + (k - missingFromLastElement)
  }

  let start = 0
  let end = nums.length - 1

  // binary search for the index that has at most k missing elements to its left.
  while (start < end) {
    const mid = Math.floor((start + end) / 2)
    const missingFromMidElement = countMissing(mid)

    if (missingFromMidElement >= k) {
      end = mid
    } else if (missingFromMidElement < k) {
      start = mid + 1
    }
  }

  return nums[start] - (countMissing(start) - k) - 1
}

export {missingElement}
