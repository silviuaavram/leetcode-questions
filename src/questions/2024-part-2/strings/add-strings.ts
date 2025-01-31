/**
 * https://leetcode.com/problems/add-strings/description
 *
 * We get the max size of the nums and we iterate based on it backwards.
 * We sum digit by digit from the back and always keep a carry over.
 * If sum is bigger than 9, we divide by 10 and save a carry over.
 * At the end we push a 1 if we still have a carry over.
 * If in the iteration one number becomes out of bounds, we use 0 as default digit.
 */
function addStrings(num1: string, num2: string): string {
  const size = Math.max(num1.length, num2.length)
  let carryOver = 0
  let index1 = num1.length - 1
  let index2 = num2.length - 1
  const result = []

  for (let index = 0; index < size; index++) {
    const digit1 = num1[index1 - index] ?? 0
    const digit2 = num2[index2 - index] ?? 0
    let sum = Number(digit1) + Number(digit2) + carryOver
    carryOver = 0

    if (sum >= 10) {
      carryOver = 1
      sum = sum % 10
    }

    result.push(sum)
  }

  if (carryOver) {
    result.push(1)
  }

  return result.reverse().join('')
}

export {addStrings}
