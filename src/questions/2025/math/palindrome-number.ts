/**
 * https://leetcode.com/problems/palindrome-number/description
 */
function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false
  }

  const digits = String(x).split('')

  for (let index = 0; index < digits.length / 2; index++) {
    if (digits[index] !== digits[digits.length - index - 1]) {
      return false
    }
  }

  return true
}

export {isPalindrome}
