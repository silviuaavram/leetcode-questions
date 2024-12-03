/**
 * https://leetcode.com/problems/next-permutation/description
 * 
 * This one's not very intuitive, has a bit of a trick.
 * We go from right to left, and find an element that's smaller than the one on the right.
 * Basically, we want to find the first increasing sequence.
 * Now, we want to swap this element with the element on its right, that's just larger.
 * Consequently, we iterate to the right until we find an element that's smaller, and we swap with the predecesor.
 * Now, we want to reverse all the right side of the swapped element.
 * If there's no increasing sequence, we reverse the whole array.
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  let i
	// find the increasing sequence of 2 numbers.
  for (i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      let j

			// now find the element we swap, should be last one that's larger.
      for (j = i + 1; j < nums.length; j++) {
        if (nums[i] >= nums[j]) {
          break
        }
      }

			// swap them
      const aux = nums[i]
      nums[i] = nums[j - 1]
      nums[j - 1] = aux

			// reverse everything from next of the swapped element.
      for (let j = i + 1; j < Math.round((nums.length + i) / 2); j++) {
        const aux = nums[j]
        nums[j] = nums[nums.length - 1 - (j - i - 1)]
        nums[nums.length - 1 - (j - i - 1)] = aux
      }

      return
    }
  }

  nums.reverse()
}

export {nextPermutation}
