/**
 * https://leetcode.com/problems/palindrome-number/description
 * 
 * Negative numbers can't be palindromes.
 * We stringify the number, split into chars, reverse them, then join.
 * We check if this string is equal to the initial one.
 */
function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false
  }

  const string = String(x)
  const reversed = string.split('').reverse().join('')

  return string === reversed
}

export {isPalindrome}
