/**
 * https://leetcode.com/problems/valid-palindrome-ii/description
 *
 * Check palindrome normally.
 * If there's step when the chars are different, check without the first or the other.
 * If there's another different char we return false.
 */
function validPalindrome(s: string): boolean {
  const chars = s.split('')
  let isAlreadyRemoved = false

  function isPalindrome(start: number, end: number) {
    if (start >= end) {
      return true
    }

    if (chars[start] === chars[end]) {
      return isPalindrome(start + 1, end - 1)
    }

    if (isAlreadyRemoved) {
      return false
    }

    isAlreadyRemoved = true

    return isPalindrome(start + 1, end) || isPalindrome(start, end - 1)
  }

  return isPalindrome(0, s.length - 1)
}

export {validPalindrome}
