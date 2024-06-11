/**
 * https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
 */

export function minOperations(s: string): number {
  let operationsStartWith1 = 0
  let operationsStartWith0 = 0

  // There are 2 versions of the correct number: 1010... and 0101...
  // We will count the mistakes for each version and return the minimum of those mistakes.
  for (let index = 0; index < s.length; index++) {
    if (Number.isInteger(index / 2)) {
      if (s[index] === '1') {
        operationsStartWith0++
      } else {
        operationsStartWith1++
      }
    } else {
      if (s[index] === '1') {
        operationsStartWith1++
      } else {
        operationsStartWith0++
      }
    }
  }

  return Math.min(operationsStartWith0, operationsStartWith1)
}
