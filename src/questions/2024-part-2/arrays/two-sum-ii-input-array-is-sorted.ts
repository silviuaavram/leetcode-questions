/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description
 *
 * We use two pointers starting from 0 and length - 1.
 * If the sum between those numbers is equal to target we return.
 * If sum is less, we increment the start pointer.
 * Otherwise, we decrement the end pointer.
 */

function twoSum(numbers: number[], target: number): number[] {
  let indexStart = 0
  let indexEnd = numbers.length - 1

  while (indexStart < indexEnd) {
    const sum = numbers[indexEnd] + numbers[indexStart]

    if (sum === target) {
      return [indexStart + 1, indexEnd + 1]
    }

    if (sum < target) {
      indexStart++
    } else {
      indexEnd--
    }
  }
}

export {twoSum}
