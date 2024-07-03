/**
 * https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/description/
 */
export function minimumSwaps(nums: number[]): number {
  let [minIndex, maxIndex] = nums.reduce((acc, num, index) => {

    if (num >= nums[acc[1]]) {
        acc[1] = index
    }

    if (num < nums[acc[0]]) {
        acc[0] = index
    }

    return acc
  }, [0, 0])
  
  let result = 0

  while (minIndex > 0) {
    if (maxIndex === minIndex - 1) {
        maxIndex++
    }

    minIndex--
    result++
  }

  while (maxIndex < nums.length - 1) {
    maxIndex++
    result++
  }

  return result
}
