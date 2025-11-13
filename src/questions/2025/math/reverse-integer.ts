/**
 * https://leetcode.com/problems/reverse-integer/description
 */
function reverse(x: number): number {
  const negative = x < 0

  if (negative) {
    x = Math.abs(x)
  }

  const stringDigits = String(x).split('').reverse()
  const newX = Number(stringDigits.join(''))

  if (negative) {
    if (-newX < -Math.pow(2, 31)) {
      return 0
    }

    return -newX
  }

  if (newX > Math.pow(2, 31) - 1) {
    return 0
  }

  return newX
}

export {reverse}
