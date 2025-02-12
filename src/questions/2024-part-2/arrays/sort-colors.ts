/**
 * https://leetcode.com/problems/sort-colors/description
 *
 * One simple way is to do one pass, count each color, then on second pass, replace the colors.
 * The one-way pass involves having 2 additional indeces, for reds and blues.
 * We need these indeces to be able to add 0 to the start and 2 to the end correctly.
 * If we find a 0, if it's not part of the start already, we move it there, and decrement index to check again at the position.
 * For 2, if it's not part of the end already, we move it there, and decrement index.
 * We stop once we encounter the end part of 2s, using the blue index we changed ourselves.
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let redIndex = 0
  let blueIndex = nums.length - 1

  for (let index = 0; index < nums.length; index++) {
    switch (nums[index]) {
      case 0: {
        if (redIndex !== index) {
          const aux = nums[redIndex]
          nums[redIndex] = 0
          nums[index--] = aux
        }

        redIndex++

        break
      }
      case 2: {
        if (blueIndex < index) {
          return
        }

        const aux = nums[blueIndex]
        nums[blueIndex--] = 2
        nums[index--] = aux

        break
      }
    }
  }
}

export {sortColors}
