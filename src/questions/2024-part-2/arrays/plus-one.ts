/**
 * https://leetcode.com/problems/plus-one/description
 *
 * We iterate backwards as long as the sum is 10.
 * If less we, we break, and replace the digit with the sum.
 * If 10, we make the digit 0, and continue looping.
 * At the end, if last digit is 0, means we still have carry over, so we add 1 as first digit.
 */
function plusOne(digits: number[]): number[] {
  if (!digits.length) {
    return [1]
  }

  for (let index = digits.length - 1; index >= 0; index--) {
    const sum = digits[index] + 1

    if (sum < 10) {
      digits[index] = sum
      break
    }

    digits[index] = 0
  }

  if (digits[0] === 0) {
    digits.unshift(1)
  }

  return digits
}

export {plusOne}
