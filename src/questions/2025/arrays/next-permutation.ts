/**
 * https://leetcode.com/problems/next-permutation/description
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  let pivotIndex

  for (let index = nums.length - 2; index >= 0; index--) {
    if (nums[index] < nums[index + 1]) {
      pivotIndex = index

      break
    }
  }

  if (pivotIndex === undefined) {
    nums.reverse()

    return
  }

  let smallestLargerNumberIndex

  for (let index = pivotIndex + 1; index < nums.length; index++) {
    if (
      nums[pivotIndex] < nums[index] &&
      (nums[smallestLargerNumberIndex] === undefined ||
        nums[index] <= nums[smallestLargerNumberIndex])
    ) {
      smallestLargerNumberIndex = index
    }
  }

  const aux = nums[pivotIndex]
  nums[pivotIndex] = nums[smallestLargerNumberIndex]
  nums[smallestLargerNumberIndex] = aux

  let start = pivotIndex + 1
  let end = nums.length - 1

  while (start < end) {
    const aux = nums[start]
    nums[start] = nums[end]
    nums[end] = aux

    start++
    end--
  }
}

export {nextPermutation}
