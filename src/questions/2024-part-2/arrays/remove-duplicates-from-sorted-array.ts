/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description
 * 
 * We iterate from index 1 and if previous number is equal, we remove it, and decrease index.
 * We decrease index because for the next iteration, we need to be on the same index, which contains next number, as a result of the removal.
 */
function removeDuplicates(nums: number[]): number {
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] === nums[index - 1]) {
      nums.splice(index, 1)
      index--
    }
  }

  return nums.length
}

export {removeDuplicates}
