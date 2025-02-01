/**
 * https://leetcode.com/problems/longest-palindromic-substring/description
 *
 * One answer that must be correct is the first character.
 * Then we iterate the string and check starting from adjacent chars, or chars separated by one char.
 * If the check results in a palindrome, we attempt to refresh the result, and check again with updated indeces.
 */
function longestPalindrome(s: string): string {
  let result = s[0]

  function checkPalindrome(start: number, end: number) {
    if (start < 0 || end === s.length || s[start] !== s[end]) {
      return
    }

    if (result.length < end - start + 1) {
      result = s.slice(start, end + 1)
    }

    checkPalindrome(start - 1, end + 1)
  }

  for (let index = 0; index < s.length - 1; index++) {
    checkPalindrome(index, index + 1)

    if (index > 0) {
      checkPalindrome(index - 1, index + 1)
    }
  }

  return result
}

export {longestPalindrome}
