/**
 * https://leetcode.com/problems/string-to-integer-atoi/description
 * 
 * We parse the string and exit whenever is te case:
 * 1. one sign char after we already had one.
 * 2. space after we're already adding numbers.
 * etc
 * 
 * As long as we conver the cases in the exit and trigger the exit when appropriate, it should work.
 */
function myAtoi(s: string): number {
  const chars = s.split('')
  let result
  let sign: '+' | '-'

  function returnResult(): number {
    if (result === undefined) {
      return 0
    }

    if (sign === '-') {
      result = -result
    }

    if (result >= 2 ** 31) {
      result = 2 ** 31 - 1
    }

    if (result < -(2 ** 31)) {
      result = -(2 ** 31)
    }

    return result
  }

  for (const char of chars) {
    if (char === '+' || char === '-') {
      if (sign !== undefined || result !== undefined) {
        return returnResult()
      } else {
        sign = char

        continue
      }
    }
    if (char === ' ') {
      if (result !== undefined || sign !== undefined) {
        return returnResult()
      }

      continue
    }
    if (isNaN(Number(char))) {
      if (result !== undefined) {
        return returnResult()
      } else {
        return 0
      }
    }

    if (result === undefined) {
      result = 0
    }

    result *= 10
    result += Number(char)
  }

  return returnResult()
}

export {myAtoi}
